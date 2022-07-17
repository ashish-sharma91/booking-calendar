import { Slot } from "../models/slot.model";

export const isSameSlot = (slot1: Slot, slot2: Slot): boolean => {
  if (slot1.time === slot2.time && slot1.date === slot2.date) {
    return true;
  } else {
    return false;
  }
};
