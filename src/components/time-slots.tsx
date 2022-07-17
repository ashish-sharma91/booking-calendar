import { Slot } from "../models/slot.model";
import "./time-slots.scss";

interface Props {
  onSelect: Function;
  slots: Slot[];
}

function TimeSlots({ onSelect, slots }: Props): JSX.Element {
  const getSlotClassName = (slot: Slot) => {
    let classes = "slot";
    if (slot.booked) {
      classes = classes + " slot-booked";
    }else if (slot.locked) {
      classes = classes + " slot-locked";
    }
    return classes;
  };

  return (
    <div data-testid="slots">
      {slots.map((slot) => (
        <div
          className={getSlotClassName(slot)}
          key={slot.time}
          onClick={() => {
            onSelect(slot);
          }}
        >
          {slot.time}
        </div>
      ))}
    </div>
  );
}

export default TimeSlots;
