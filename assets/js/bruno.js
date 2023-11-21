// function getHimmelsrichtung(grad) {
//   const ost = 45;
//   const süd = 135;
//   const west = 225;
//   const nord = 315;

//   if (grad >= ost && grad < süd) {
//     return "Ost";
//   } else if (grad >= süd && grad < west) {
//     return "Süd";
//   } else if (grad >= west && grad < nord) {
//     return "West";
//   } else {
//     return "Nord";
//   }
// }
var inputStadt = document.getElementById("standort");
// const himmelsrichtung = getHimmelsrichtung(windRichtung);
// console.log(himmelsrichtung);
const version2 = () => {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      inputStadt.value +
      "&appid=034b30eb230e77ea19f67cc74c9589f1"
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
      console.log(late);

      return fetch(
        "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
          late +
          "&lon=" +
          longe +
          "&cnt=7&appid={API key}"
      );
    })
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Fetch konnte nicht geladen werden");
      }
      return response.json();
    })
    .then((data) => {
      const temperaturEins = data.list[1].temp.day;
      const temperaturZwei = data.list[2].temp.day;
      const temperaturDrei = data.list[3].temp.day;
      const temperaturVier = data.list[4].temp.day;
      const temperaturFünf = data.list[5].temp.day;
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
      document.getElementById("dayOneSymbol").textContent = symbolEins;
      document.getElementById("dayTwoSymbol").textContent = symbolZwei;
      document.getElementById("dayThreeSymbol").textContent = symbolDrei;
      document.getElementById("dayFourSymbol").textContent = symbolVier;
      document.getElementById("dayFiveSymbol").textContent = symbolFünf;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.getElementById("button").addEventListener("click", version2);

// document.getElementById("display").style.scale = 0.01;
// document.getElementById("display").style.rotate = 180;
// document.getElementById("display").style.scale = 1;
// document.getElementById("display").style.rotate = 0;
