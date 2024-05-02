

//api
const apiUrl = 'https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403';

const weatherOutput = document.getElementById("Weather-output");

async function getWeather() {

  const response = await fetch(apiUrl);

  const data = await response.json();

//changebackground

function changeBackground() {
  var now = new Date();
  var hours = now.getHours();
  
  if (hours >= 6 && hours < 18) {

    document.body.classList.add("background-clear");
    
    document.getElementById('predictions').style.background = 'rgba(0,0,0,.05)';

    
  } else {

    document.body.classList.add("background-dark");
    document.getElementById('predictions').style.background = 'rgba(0,0,0,.3)';
   

  }
}


changeBackground();


setInterval(changeBackground, 3600000);

//document.body.style.backgroundColor=data[0].backgroundColor;

  //chenge date
  const today = Date.now();
  const todayFa = {
    "dayWeek": getDateFormat(today, { "weekday": "long" }),
    "day": getDateFormat(today, { "day": "2-digit" }),
    "monthTitle": getDateFormat(today, { "month": "long" }),
  }

  function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
  }

  //Today temperature
  let history = document.getElementById("date");
  let icon = document.getElementById("big-icon");
  let max = document.getElementById("max");
  let current = document.getElementById("current");
  let text = document.getElementById("text");
  let min = document.getElementById("min");


  history.innerHTML = todayFa.dayWeek + ' ' + todayFa.day + ' ' + todayFa.monthTitle;
  icon.src = `${data[0].weather.main}.png`;
  current.innerHTML = Math.round(data[0].current) + '°';
  max.innerHTML = Math.round(data[0].max) + "°حداکثر";
  min.innerHTML = Math.round(data[0].min) + "°حداقل";
  text.innerHTML = data[0].customDescription.text;

  //The first row of the table
  let iconOne = document.getElementById("icon-one");
  let maxOne = document.getElementById("max-one");
  let minOne = document.getElementById("min-one");
  let dateOne = document.getElementById("date-one");

  dateOne.innerHTML = data[1].dateTitle;
  iconOne.src = `${data[1].weather.main}.png`;
  maxOne.innerHTML = Math.round(data[1].max) + "°حداکثر";
  minOne.innerHTML = Math.round(data[1].min) + "°حداقل";

  
  //The second row of the table
  let iconTwo = document.getElementById("icon-two");
  let maxTwo = document.getElementById("max-two");
  let minTwo = document.getElementById("min-two");
  let dateTwo = document.getElementById("date-two");

  dateTwo.innerHTML = data[2].dateTitle;
  iconTwo.src = `${data[2].weather.main}.png`;
  maxTwo.innerHTML = Math.round(data[2].max) + "°حداکثر";
  minTwo.innerHTML = Math.round(data[2].min) + "°حداقل";


  //The third row of the table
  let iconThree = document.getElementById("icon-three");
  let maxThree = document.getElementById("max-three");
  let minThree = document.getElementById("min-three");
  let dateThree = document.getElementById("date-three");

  dateThree.innerHTML = data[3].dateTitle;
  iconThree.src = `${data[3].weather.main}.png`;
  maxThree.innerHTML = Math.round(data[3].max) + "°حداکثر";
  minThree.innerHTML = Math.round(data[3].min) + "°حداقل";


  //The fourth row of the table
  let iconFour = document.getElementById("icon-four");
  let maxFour = document.getElementById("max-four");
  let minFour = document.getElementById("min-four");
  let dateFour = document.getElementById("date-four");

  dateFour.innerHTML = data[4].dateTitle;
  iconFour.src = `${data[4].weather.main}.png`;
  maxFour.innerHTML = Math.round(data[4].max) + "°حداکثر";
  minFour.innerHTML = Math.round(data[4].min) + "°حداقل";


  //The fifth row of the table
  let iconFive = document.getElementById("icon-five");
  let maxFive = document.getElementById("max-five");
  let minFive = document.getElementById("min-five");
  let dateFive = document.getElementById("date-five");

  dateFive.innerHTML = data[5].dateTitle;
  iconFive.src = `${data[5].weather.main}.png`;
  maxFive.innerHTML = Math.round(data[5].max) + "°حداکثر";
  minFive.innerHTML = Math.round(data[5].min) + "°حداقل";

 

}



getWeather();