let CurrentTimer = document.querySelector(".timer");

function RenderTime() {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const currentSecond = new Date().getSeconds();
  const currentDay = new Date().getDay();

  const allMonths = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const allWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  const currentmonth = allMonths.find((month, index) => {
    if (index + 1 == currentMonth) {
      return month;
    }
  });

  const currentWeekName = allWeek.find((week, index) => {
    if (index  == currentDay) {
      return week;
    }
  });

  CurrentTimer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.className = "text-lg sm:text-xl md:text-2xl";
  h2.innerText = `${currentDate} ${currentmonth}, ${currentYear}`;

  const h1 = document.createElement("h1");
  h1.className = "time text-lg sm:text-3xl md:text-5xl font-bold";
  if(currentHour >= 12 ){
    h1.innerText = `${currentWeekName}, ${currentHour}:${String(currentMinutes).padStart('2','0')}:${ String(currentSecond).padStart('2','0')}  PM`
  }else{
    h1.innerText = `${currentWeekName}, ${currentHour}:${currentMinutes}:${currentSecond}  AM`
  }
  // currentHour >= 12 ? "PM" : "AM"

  CurrentTimer.appendChild(h2);
  CurrentTimer.appendChild(h1);
}

RenderTime();
setInterval(RenderTime, 1000);

async function WeatherApi(){
const apiKey = '525e384811a647df9e7121059240409';
let city = 'jaipur'
let windspeed = document.querySelector('.wind')
let Humidity = document.querySelector('.humnity')
let Temp = document.querySelector('.temp')
let locationName = document.querySelector('.location')
let rain = document.querySelector('.rain')
let precepitation = document.querySelector('.precepitation')

  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  const data = await response.json()


  windspeed.textContent = data.current.wind_kph;
  Temp.textContent = `${data.current.temp_c}°C`;
  Humidity.textContent = data.current.humidity;
  rain.textContent = data.current.condition.text;
  precepitation.textContent = data.current.heatindex_c;
  locationName.textContent =`${data.location.name} (${data.location.region})`;

  console.log(data);

} 

WeatherApi()


let theme = document.querySelector('.theme')
let rootElement = document.documentElement
rootElement.style.setProperty('--bg-dark',"#DCD0A8")


theme.addEventListener('click',function(){
})