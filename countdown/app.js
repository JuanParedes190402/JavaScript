const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
//devuelve todos los h4 de deadline
const items = document.querySelectorAll('.deadline-format h4');
//obtener el valor de cada parametro de la fecha
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//los valores de hoy mas valores extra
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

 //el tiempo final de la cuenta regresiva dado en mls
 const t =futureTime - today;
 //1seg = 1000ms
 //1min =60seg
 //1hora = 60min
 //1 dia = 24 horas

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calcular todos los valores
  let days = t / oneDay;
  days = Math.floor(days);
  //obtener los valroes en decimales enteros con Math.floor
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  //si t es menor a 0 (se acaba la cuenta regresiva)
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Lo siento, este giveaway expiro!</h4>`;
  }
}

let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();
