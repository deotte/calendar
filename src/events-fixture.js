const currentDay = new Date();

const minusOneDay = subtractDate(currentDay, 1);
const minusTwoDays = subtractDate(currentDay, 2);
const plusOneDay = addDate(currentDay, 1);
const plusTwoDays = addDate(currentDay, 2);

const events = [
  { "id": 1, "title": "Call with manager", "start": "9 AM", "end": "10 AM","date": dateString(currentDay) },
  { "id": 2, "title": "Fundraising call", "start": "10:30 AM", "end": "11 AM", "date": dateString(currentDay) },
  { "id": 3, "title": "Meeting with CEO", "start": "11:30 AM", "end": "12 PM", "date": dateString(currentDay) },
  { "id": 4, "title": "Team coffee time", "start": "1 PM", "end": "2 PM", "date": dateString(currentDay) },
  { "id": 5, "title": "Scrum stand up", "start": "3 PM", "end": "3:15 PM", "date": dateString(currentDay) },
  { "id": 6, "title": "Call with new customer", "start": "8 AM", "end": "9 AM", "date": dateString(minusOneDay) }, 
  { "id": 7, "title": "Meeting with board", "start": "10 AM", "end": "11 AM", "date": dateString(minusOneDay) }, 
  { "id": 8, "title": "Lunch with in laws", "start": "12 PM", "end": "1 PM", "date": dateString(minusOneDay) }, 
  { "id": 9, "title": "Doctor's appointment", "start": "2 PM", "end": "3 PM", "date": dateString(minusOneDay) },
  { "id": 10, "title": "Kids' school play", "start": "6 PM", "end": "7 PM", "date": dateString(minusOneDay) },
  { "id": 11, "title": "Book author signing", "start": "7 PM", "end": "9 PM", "date": dateString(minusOneDay) },
  { "id": 12, "title": "Cofee with CFO", "start": "10:30 AM", "end": "11:30 AM", "date": dateString(minusTwoDays) },
  { "id": 13, "title": "Garage band practice", "start": "12 PM", "end": "1 PM", "date": dateString(minusTwoDays) },
  { "id": 14, "title": "Vet appointment", "start": "2 PM", "end": "3 PM", "date": dateString(minusTwoDays) },
  { "id": 15, "title": "Art class with George", "start": "3 PM", "end": "4 PM", "date": dateString(minusTwoDays) },
  { "id": 16, "title": "Dinner with neighbors", "start": "6 PM", "end": "7 PM", "date": dateString(minusTwoDays) },
  { "id": 17, "title": "Tennis with Jeffrey", "start": "8 AM", "end": "9 AM", "date": dateString(plusOneDay) },
  { "id": 18, "title": "Skydiving with Barack", "start": "10 AM", "end": "2 PM", "date": dateString(plusOneDay) },
  { "id": 19, "title": "Lunch with Lincoln", "start": "2 PM", "end": "3 PM", "date": dateString(plusOneDay) },
  { "id": 20, "title": "Guitar lessons", "start": "3 PM", "end": "4 PM", "date": dateString(plusOneDay) },
  { "id": 21, "title": "Fly fishing with Bear", "start": "6 PM", "end": "7 PM", "date": dateString(plusOneDay) },
  { "id": 22, "title": "Training with Luke", "start": "6 AM", "end": "10 AM", "date": dateString(plusTwoDays) },
  { "id": 23, "title": "Debugging with Turing", "start": "12 PM", "end": "1 PM", "date": dateString(plusTwoDays) },
  { "id": 24, "title": "Mandolin with Bo", "start": "2 PM", "end": "3 PM", "date": dateString(plusTwoDays) },
  { "id": 25, "title": "Piano with Bob", "start": "4 PM", "end": "5 PM", "date": dateString(plusTwoDays) },
  { "id": 26, "title": "Pick up basketball", "start": "7 PM", "end": "8 PM", "date": dateString(plusTwoDays) }
];

function dateString(day) {
  return new Date(day).toISOString().slice(0, 10);
};

function subtractDate(day, number) {
  let dateCopy = new Date(day);
  return new Date(dateCopy.setDate(dateCopy.getDate() - number));
}

function addDate(day, number) {
  let dateCopy = new Date(day);
  return new Date(dateCopy.setDate(dateCopy.getDate() + number));
}

export default events;

