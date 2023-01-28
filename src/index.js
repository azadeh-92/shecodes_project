//date
// let now = new Date();
// let day = now.getDay();
// let hour = now.getHours();
// let min = now.getMinutes();
// let weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let dayOfweek = weekday[day];
// let timeIs = dayOfweek + " " + hour + ":" + min;
// let timeShow = document.querySelector(".timer");

// timeShow.innerHTML = timeIs;
//gsp
let yes = document.querySelector("#button-addon3");
yes.addEventListener("click", myloc);
function myloc(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apikey = "6643c7326a4c2a38838264a28531d97e";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
  axios.get(url).then(showtemp);
}

function showtemp(response) {
  let temp = Math.round(response.data.main.temp);
  let nameofcity = response.data.name;
  let degree = document.querySelector(".deg");
  degree.innerHTML = temp;
  let cityShow = document.querySelector("#cityshow");
  cityShow.innerHTML = nameofcity;
}

function show(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchuser").value;
  let cityShow = document.querySelector("#cityshow");
  let apiKey = "80d30bftce9bob6014a53382c1be36a8";
  let urltemp = `https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=${apiKey}&units=metric`;

  axios.get(urltemp).then(showTemp);
  function showTemp(response) {
    // console.log(response.data.weather);
    let tempr = Math.round(response.data.temperature.current);
    let degree = document.querySelector(".deg");
    degree.innerHTML = tempr;
    let condition = document.querySelector(".condition");
    condition.innerHTML = response.data.condition.description;
    icon = response.data.condition.icon;
    let imageIcon = document.querySelector("#icon");
    imageIcon.setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
    );
    imageIcon.setAttribute("alt", "icon");
    let now = new Date(response.data.time * 1000);
    // console.log(now);
    let day = now.getDay();
    let hour = now.getHours();
    let min = now.getMinutes();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayOfweek = weekday[day];
    let timeIs = dayOfweek + " " + hour + ":" + min;
    let timeShow = document.querySelector(".timer");

    timeShow.innerHTML = `Last updated at ${timeIs}`;
    let wind = document.querySelector(".wind");
    let hum = document.querySelector(".humidity");
    wind.innerHTML = `wind: ${Math.round(response.data.wind.speed)} Km/h`;
    hum.innerHTML = `humidity: ${response.data.temperature.humidity}%`;
  }

  cityShow.innerHTML = searchCity;

  function forcasting(response1) {
    let forcast = document.querySelector(".forcast");
    let passDay = [1, 2, 3, 4];
    let days = ["SAT", "SUN", "MON", "TUE"];
    let forcastHtml = `<div class="row forcast">`;
    passDay.forEach(function (passDay) {
      forcastHtml =
        forcastHtml +
        `<div class="col-3">
           <div class=" col rooz">${passDay}</div>
             <div class="col dama">${Math.round(
               response1.data.daily[passDay].temperature.minimum
             )}°  &nbsp<span class="min">  ${Math.round(
          response1.data.daily[passDay].temperature.maximum
        )}°</span></div>
              <img src="image/1.png" alt="imagetemp" width="50px" class="col" />
              </div>`;
    });
    forcastHtml = forcastHtml + `</div>`;
    forcast.innerHTML = forcastHtml;
  }
  let forcastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${searchCity}&key=${apiKey}&units=metric`;
  console.log(forcastUrl);
  let forcastDay = [];
  let forcastMin = [];
  let forcastMax = [];
  let forcastIcon = [];
  axios.get(forcastUrl).then(forcasting);
}
//search
let ok = document.querySelector("#button-addon2");
ok.addEventListener("click", show);

function changetos(event) {
  event.preventDefault();

  let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
  let searchCity = document.querySelector(".aval").textContent;
  let urltemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
  axios.get(urltemp).then(showTemp);
  function showTemp(response) {
    // console.log(response.data.main.temp);
    let tempr = Math.round(response.data.main.temp);
    let degree = document.querySelector(".deg");
    degree.innerHTML = tempr;
    tofar.classList.remove("disabled-link");
    tosels.classList.add("disabled-link");
  }
}

function changetof(event) {
  event.preventDefault();
  let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
  let searchCity = document.querySelector("#cityshow").textContent;
  let urltemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
  axios.get(urltemp).then(showTemp);
  function showTemp(response) {
    let tempr = Math.round(response.data.main.temp);
    let degree = document.querySelector(".deg");
    degree.innerHTML = Math.round((tempr * 9) / 5 + 32);

    tofar.classList.add("disabled-link");
    tosels.classList.remove("disabled-link");
  }
}

let tosels = document.querySelector(".tosels");
tosels.addEventListener("click", changetos);
let tofar = document.querySelector(".tofar");
tofar.addEventListener("click", changetof);
// function forcast() {
//   let forcast = document.querySelector(".forcast");
//   let days = ["SAT", "SUN", "MON", "TUE"];
//   let forcastHtml = `<div class="row forcast">`;
//   days.forEach(function (day) {
//     forcastHtml =
//       forcastHtml +
//       `<div class="col-3">
//            <div class=" col rooz">${day}</div>
//              <div class="col dama">47°  &nbsp<span class="min">  53°</span></div>
//               <img src="image/1.png" alt="imagetemp" width="50px" class="col" />
//               </div>`;
//   });
//   forcastHtml = forcastHtml + `</div>`;
//   forcast.innerHTML = forcastHtml;
// }
// forcast();
