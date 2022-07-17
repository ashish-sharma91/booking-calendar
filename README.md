# Booking Calender Frontend Test Project

### Before first commit
1. npx create-react-app booking-calendar --template typescript (1minute)
2. npm install sass (1minute)

### Points to note (5minutes)
1. Backend is not ready, so write tasks for them
2. Show working progress using commits(this document is made from top to down and shows my thinking proceess).
3. Document how to run the project and run test suites.
4. Need to devote max 4 hours on the task.
5. Complete task is the aim but to check the thought process.
6. In the end submit the public or private repo link.

### User Story (5minutes)
1. Student wants to book a call with their mentor.
2. Clicking on date in the calendar shows available and booked time slots.
3. Clicking on the available slot shows a input field to enter the reason of call and 'Confirm Call` button.
    a. Clicking on the 'Confirm Call` button will show confirmation message with date, time and reason.
4. Clicking on the booked slot will show a error message about booked slot.


### Assumptions (5minutes)
1. Store the confirmation in the memory.
2. Allocated slots from the external api might change any time.
3. Slots are always 1 hour, starts at full hours and 24/7.

4. I can use the in-memory database instead of browser storage.
5. As I have used in-memory database, I haven't restricted used to book only one slot.
6. I forgot to use the API which was provided in the assignment, but due to time limit I am not changing.
    It can be altered in slot service to get response from API instead of in memory.


### Resources (1minutes)
1. https://cfcalendar.docs.apiary.io/#

### Class diagrams (LLD)

### Run the project
npm run dev

### Run the tests
npm test

