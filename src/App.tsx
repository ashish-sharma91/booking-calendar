import { useEffect, useState } from "react";
import CalendarWrapper from "./components/calender";
import TimeSlots from "./components/time-slots";
import { getTimeslots } from "./config/time-slots";
import { Slot } from "./models/slot.model";
import { slotsService } from "./services/slots.service";
import "./styles/styles.scss";
import { isSameSlot } from "./utils/slot.util";

function App() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [lockedSlot, setLockedSlot] = useState<Slot[]>([]);
  const [reason, setReason] = useState<string>('');

  const onChangeDate = (e: string) => {
    setSelectedDate(e);
    updateWithBookedSlots(e);
  };

  const updateWithBookedSlots = (e: string) => {
    const bookedSlots = slotsService.getBookedSlotsByDate$(e);
    const allSlots = getTimeslots(e);
    allSlots.forEach((allSlot,i) => {
      bookedSlots.forEach((bookedSlot) => {
        if (isSameSlot(allSlot, bookedSlot)) {
          allSlots[i] = {...bookedSlot};
        }
      });
    });
    setSlots(allSlots);
  };

  const lockSlot = (slot: Slot) => {
    if (slot.booked) {
      toaster("Slot already booked, please find another slot.");
    } else {
      const slotsCopy = [...slots];
      slotsCopy.forEach((sl) => {
        if (isSameSlot(sl, slot)) {
          sl.locked = !sl.locked;
        } else {
          sl.locked = false;
        }
      });
      updateLockedSlot(slotsCopy);
      setSlots(slotsCopy);
    }
  };

  const updateLockedSlot = (slots: Slot[]) => {
    const lockedSlot = slots.filter((slot) => slot.locked);
    if (lockedSlot.length) {
      setLockedSlot(lockedSlot);
    } else {
      setLockedSlot([]);
    }
  };

  const bookSlot = () => {
    const slotToUpdate = lockedSlot[0];
    slotToUpdate.booked = true;
    slotToUpdate.locked = false;
    slotToUpdate.reason = reason;
    slotsService.updateSlotByDate$(slotToUpdate);
    setReason('');
    updateWithBookedSlots(selectedDate);
    toaster("Congratulations! You have successfully booked a call with your mentor.");
  };

  const toaster = (message: string) => alert(message);

  return (
    <div>
      <CalendarWrapper onChange={onChangeDate} />
      {selectedDate && <TimeSlots onSelect={lockSlot} slots={slots} />}
      {lockedSlot.length === 1 && <input placeholder="Enter reason" onChange={e=>setReason(e.target.value)} data-testid="reasonInput" />}
      {lockedSlot.length === 1 && <button onClick={bookSlot} data-testid="bookSlotBtn">Book Slot</button>}
    </div>
  );
}

export default App;
