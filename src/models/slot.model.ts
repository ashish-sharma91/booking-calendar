export interface Slot {
  time: string;
  date: string;
  booked: boolean;
  locked?: boolean;
  reason?: string;
}
