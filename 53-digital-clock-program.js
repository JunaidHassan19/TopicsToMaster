function updateClock() {

  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12; // convert to 12-hour time format
  hours = hours.toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById('clock').textContent = timeString;
  setTimeout(updateClock, 1000); // update every second
}

updateClock(); // initial call