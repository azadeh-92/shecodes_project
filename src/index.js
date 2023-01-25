let now = new Date();
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
  "Saturday"
];
let dayOfweek = weekday[day];
let timeIs = dayOfweek + " " + hour + ":" + min;
let timeShow = document.querySelector(".timer");

timeShow.innerHTML = timeIs;

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
  // alert("hi");
  event.preventDefault();
  let searchCity = document.querySelector("#searchuser").value;
  let cityShow = document.querySelector("#cityshow");
  let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
  let urltemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
  axios.get(urltemp).then(showTemp);
  function showTemp(response) {
    console.log(response.data.main.temp);
    let tempr = Math.round(response.data.main.temp);
    let degree = document.querySelector(".deg");
    degree.innerHTML = tempr;
  }

  cityShow.innerHTML = searchCity;
}

let ok = document.querySelector("#button-addon2");
ok.addEventListener("click", show);

function changetos(event) {
  event.preventDefault();

  let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
  let searchCity = document.querySelector(".aval").textContent;
  let urltemp = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
  axios.get(urltemp).then(showTemp);
  function showTemp(response) {
    console.log(response.data.main.temp);
    let tempr = Math.round(response.data.main.temp);
    let degree = document.querySelector(".deg");
    degree.innerHTML = tempr;
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
    degree.innerHTML = (tempr * 9) / 5 + 32;
  }
}

let tosels = document.querySelector(".tosels");
tosels.addEventListener("click", changetos);
let tofar = document.querySelector(".tofar");
tofar.addEventListener("click", changetof);