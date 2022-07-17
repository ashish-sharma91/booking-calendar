import { Slot } from "../models/slot.model";

export const getTimeslots = (date: string): Slot[] => {
  const slots = [];
  for (let i = 0; i < 24; i++) {
    slots.push({ time: i+':00', date: date, booked: false });
  }
  return slots;
};
