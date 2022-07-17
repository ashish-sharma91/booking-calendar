import { slots } from "../in-memory-database/slots.table";
import { Slot } from "../models/slot.model";
import { isSameSlot } from "../utils/slot.util";

export const slotsService = {
  updateSlotByDate$(slot: Slot): Slot[] {
    let slotExists = false;
    if (slots[slot.date]) {
      slots[slot.date].forEach((sl) => {
        if (isSameSlot(slot, sl)) {
          sl = slot;
          slotExists = true;
        }
      });
    } else {
      slots[slot.date] = [slot];
      slotExists = true;
    }
    if(!slotExists) {
      slots[slot.date].push(slot);
    }
    return slots[slot.date];
  },
  getBookedSlotsByDate$(date: string): Slot[] {
    return slots[date] || [];
  },
};
