const fullDate = new Date();
const hours = fullDate.getHours();
const minutes = fullDate.getMinutes();
const seconds = fullDate.getSeconds();

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = minutes;
document.getElementById('second').innerHTML = seconds;

