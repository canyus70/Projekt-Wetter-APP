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
console.log(himmelsrichtung);

fetch(
  "api.openweathermap.org/data/2.5/forecast/daily?lat=" +
    late +
    "&lon=" +
    longe +
    "&cnt=7&appid={API key}"
)
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
  });

document.getElementById("display").style.scale = 0.01;
document.getElementById("display").style.rotate = 180;
document.getElementById("display").style.scale = 1;
document.getElementById("display").style.rotate = 0;
