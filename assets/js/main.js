const version1 = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=49.01&lon=12.09&appid=034b30eb230e77ea19f67cc74c9589f1"
  )
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const stadtName = data.name;
      const temperatur = data.main.temp;
      const gefühlteTemperatur = data.main.feels_like;
      const wetterBeschreibung = data.weather[0].description;
      const location = stadtName;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      const luftDruck = data.main.pressure;
      const windGeschwindigKeit = data.wind.speed;
      const windRichtung = data.wind.deg;
      const icon = data.weather[0].icon;

      function getHimmelsrichtung(grad) {
        const ost = 45;
        const süd = 135;
        const west = 225;
        const nord = 315;

        if (grad >= ost && grad < süd) {
          return "Ost";
        } else if (grad >= süd && grad < west) {
          return "Süd";
        } else if (grad >= west && grad < nord) {
          return "West";
        } else {
          return "Nord";
        }
      }

      const himmelsrichtung = getHimmelsrichtung(windRichtung);

      const rain = data.rain && data.rain["1h"];
      const clouds = data.clouds && data.clouds.all;

      function setBackground(rain, cloud) {
        if (rain > 0) {
          return "regen";
        } else if (cloud > 60) {
          return "wolkigZwei";
        } else if (cloud <= 60 && cloud >= 30) {
          return "wolkig";
        } else {
          return "sonne";
        }
      }

      const hintergrund = setBackground(rain, clouds);

      document
        .getElementById("display")
        .classList.remove("regen", "wolkigZwei", "wolkig", "sonne");
      document.getElementById("display").classList.add(hintergrund);

      document.getElementById("wetter").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` + icon + `@2x.png">`;
      document.getElementById("wetterBeschreibung").textContent =
        wetterBeschreibung;
      document.getElementById("temperatur").textContent =
        (temperatur - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("location").textContent = location;
      document.getElementById("maxTemp").textContent =
        (maxTemp - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("minTemp").textContent =
        (minTemp - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("gefühltTemp").textContent =
        (gefühlteTemperatur - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("luftdruck").textContent = luftDruck + " hp";
      document.getElementById("windgeschwindigkeit").textContent =
        (windGeschwindigKeit * 3.6).toFixed(0) + " km/h";
      document.getElementById("windrichtung").textContent = himmelsrichtung;
    });
};

const fiveDayforecastLoad = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=49.01&lon=12.09&appid=034b30eb230e77ea19f67cc74c9589f1`
  )
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const temperaturEins =
        (data.list[1].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturZwei =
        (data.list[2].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturDrei =
        (data.list[3].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturVier =
        (data.list[4].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturFünf =
        (data.list[5].main.temp - 273.15).toFixed(0) + " °C";
      const symbolEins = data.list[1].weather.icon;
      const symbolZwei = data.list[2].weather.icon;
      const symbolDrei = data.list[3].weather.icon;
      const symbolVier = data.list[4].weather.icon;
      const symbolFünf = data.list[5].weather.icon;

      const today = new Date();
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(today.getDate() + 2);
      const thirdDay = new Date(today);
      thirdDay.setDate(today.getDate() + 3);
      const fourthDay = new Date(today);
      fourthDay.setDate(today.getDate() + 4);
      const fifthDay = new Date(today);
      fifthDay.setDate(today.getDate() + 5);

      const getAbbreviatedDayName = (date) => {
        const daysOfWeek = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        return daysOfWeek[date.getDay()];
      };

      const dayAfterTomorrowAbbreviated =
        getAbbreviatedDayName(dayAfterTomorrow);
      const thirdDayAbbreviated = getAbbreviatedDayName(thirdDay);
      const fourthDayAbbreviated = getAbbreviatedDayName(fourthDay);
      const fifthDayAbbreviated = getAbbreviatedDayName(fifthDay);

      document.getElementById("dayTwo").textContent =
        dayAfterTomorrowAbbreviated;
      document.getElementById("dayThree").textContent = thirdDayAbbreviated;
      document.getElementById("dayFour").textContent = fourthDayAbbreviated;
      document.getElementById("dayFive").textContent = fifthDayAbbreviated;

      document.getElementById("dayOneTemp").textContent = temperaturEins;
      document.getElementById("dayTwoTemp").textContent = temperaturZwei;
      document.getElementById("dayThreeTemp").textContent = temperaturDrei;
      document.getElementById("dayFourTemp").textContent = temperaturVier;
      document.getElementById("dayFiveTemp").textContent = temperaturFünf;
      document.getElementById("dayOneSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolEins +
        `@2x.png">`;
      document.getElementById("dayTwoSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolZwei +
        `@2x.png">`;
      document.getElementById("dayThreeSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolDrei +
        `@2x.png">`;
      document.getElementById("dayFourSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolVier +
        `@2x.png">`;
      document.getElementById("dayFiveSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolFünf +
        `@2x.png">`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.addEventListener("load", version1(), fiveDayforecastLoad());

let inputStadt = document.body.querySelector("#standort");

const version2 = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputStadt.value}&appid=034b30eb230e77ea19f67cc74c9589f1`
  )
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const late = data[0].lat;
      const longe = data[0].lon;

      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${late}&lon=${longe}&appid=034b30eb230e77ea19f67cc74c9589f1`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Daten konnten nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const stadtName = data.name;
      const temperatur = data.main.temp;
      const gefühlteTemperatur = data.main.feels_like;
      const wetter = data.weather[0].main;
      const wetterBeschreibung = data.weather[0].description;
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const location = stadtName;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      const luftDruck = data.main.pressure;
      const windGeschwindigKeit = data.wind.speed;
      const windRichtung = data.wind.deg;
      const icon = data.weather[0].icon;

      function getHimmelsrichtung(grad) {
        const ost = 45;
        const süd = 135;
        const west = 225;
        const nord = 315;

        if (grad >= ost && grad < süd) {
          return "Ost";
        } else if (grad >= süd && grad < west) {
          return "Süd";
        } else if (grad >= west && grad < nord) {
          return "West";
        } else {
          return "Nord";
        }
      }

      const himmelsrichtung = getHimmelsrichtung(windRichtung);

      const rain = data.rain && data.rain["1h"];
      const clouds = data.clouds.all;

      function setBackground(rain, cloud) {
        if (rain > 0) {
          return "regen";
        } else if (cloud > 60) {
          return "wolkigZwei";
        } else if (cloud <= 60 && cloud >= 30) {
          return "wolkig";
        } else {
          return "sonne";
        }
      }

      const hintergrund = setBackground(rain, clouds);
      console.log(hintergrund);

      document
        .getElementById("display")
        .classList.remove("regen", "wolkigZwei", "wolkig", "sonne");
      document.getElementById("display").classList.add(hintergrund);

      document.getElementById("wetter").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` + icon + `@2x.png">`;
      document.getElementById("wetterBeschreibung").textContent =
        wetterBeschreibung;
      document.getElementById("temperatur").textContent =
        (temperatur - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("location").textContent = location;
      document.getElementById("maxTemp").textContent =
        (maxTemp - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("minTemp").textContent =
        (minTemp - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("gefühltTemp").textContent =
        (gefühlteTemperatur - 273.15).toFixed(0) + " " + "°C";
      document.getElementById("luftdruck").textContent = luftDruck + " hp";
      document.getElementById("windgeschwindigkeit").textContent =
        (windGeschwindigKeit * 3.6).toFixed(0) + " km/h";
      document.getElementById("windrichtung").textContent = himmelsrichtung;
    });
};
document.body.querySelector("#button").addEventListener("click", version2);

const fiveDayforecast = () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputStadt.value}&appid=034b30eb230e77ea19f67cc74c9589f1`
  )
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const late = data[0].lat;
      const longe = data[0].lon;

      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${late}&lon=${longe}&appid=034b30eb230e77ea19f67cc74c9589f1`
      );
    })
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const temperaturEins =
        (data.list[1].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturZwei =
        (data.list[2].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturDrei =
        (data.list[3].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturVier =
        (data.list[4].main.temp - 273.15).toFixed(0) + " °C";
      const temperaturFünf =
        (data.list[5].main.temp - 273.15).toFixed(0) + " °C";
      const symbolEins = data.list[1].weather.icon;
      const symbolZwei = data.list[2].weather.icon;
      const symbolDrei = data.list[3].weather.icon;
      const symbolVier = data.list[4].weather.icon;
      const symbolFünf = data.list[5].weather.icon;

      const today = new Date();
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(today.getDate() + 2);
      const thirdDay = new Date(today);
      thirdDay.setDate(today.getDate() + 3);
      const fourthDay = new Date(today);
      fourthDay.setDate(today.getDate() + 4);
      const fifthDay = new Date(today);
      fifthDay.setDate(today.getDate() + 5);

      const getAbbreviatedDayName = (date) => {
        const daysOfWeek = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        return daysOfWeek[date.getDay()];
      };

      const dayAfterTomorrowAbbreviated =
        getAbbreviatedDayName(dayAfterTomorrow);
      const thirdDayAbbreviated = getAbbreviatedDayName(thirdDay);
      const fourthDayAbbreviated = getAbbreviatedDayName(fourthDay);
      const fifthDayAbbreviated = getAbbreviatedDayName(fifthDay);

      document.getElementById("dayTwo").textContent =
        dayAfterTomorrowAbbreviated;
      document.getElementById("dayThree").textContent = thirdDayAbbreviated;
      document.getElementById("dayFour").textContent = fourthDayAbbreviated;
      document.getElementById("dayFive").textContent = fifthDayAbbreviated;

      document.getElementById("dayOneTemp").textContent = temperaturEins;
      document.getElementById("dayTwoTemp").textContent = temperaturZwei;
      document.getElementById("dayThreeTemp").textContent = temperaturDrei;
      document.getElementById("dayFourTemp").textContent = temperaturVier;
      document.getElementById("dayFiveTemp").textContent = temperaturFünf;
      document.getElementById("dayOneSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolEins +
        `@2x.png">`;
      document.getElementById("dayTwoSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolZwei +
        `@2x.png">`;
      document.getElementById("dayThreeSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolDrei +
        `@2x.png">`;
      document.getElementById("dayFourSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolVier +
        `@2x.png">`;
      document.getElementById("dayFiveSymbol").innerHTML =
        `<img src="https://openweathermap.org/img/wn/` +
        symbolFünf +
        `@2x.png">`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.getElementById("button").addEventListener("click", fiveDayforecast);

function drehen() {
  const displayElement = document.getElementById("display");

  displayElement.style.transform = "scale(0.01) rotate(360deg)";

  setTimeout(() => {
    displayElement.style.transform = "scale(1) rotate(0deg)";
  }, 500);
}
