import { Slot } from '../models/slot.model';
import { isSameSlot} from './slot.util'; 

describe("Slots util test", () => {
    it('should be true',()=>{
        const slot1: Slot = { time: '7:00', date: '2022-07-17', booked: true, locked: false, reason: ''};
        const slot2: Slot = {time: '7:00', date: '2022-07-17', booked: true, locked: false, reason: ''};
        expect(isSameSlot(slot1,slot2)).toBe(true);
    })

    it('should be false',()=>{
        const slot1: Slot = { time: '7:00', date: '2022-07-18', booked: true, locked: false, reason: ''};
        const slot2: Slot = {time: '7:00', date: '2022-07-17', booked: true, locked: false, reason: ''};
        expect(isSameSlot(slot1,slot2)).toBe(false);
    })
});
