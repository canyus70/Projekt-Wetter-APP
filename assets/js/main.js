
const version1 = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=034b30eb230e77ea19f67cc74c9589f1')
            .then(response=> {
                if(response.ok === false) {
                    throw new Error ("Fetch konnte nicht geladen werden")
                }
                return response.json();
                
            })
            .then (data => {
                    const stadtName= data.name;
                    const temperatur = data.main.temp;
                    const gefühlteTemperatur = data.main.feels_like;
                    const wetter = data.weather[0].main;
                    const wetterBeschreibung = data.weather[0].description;
                    const lat = data.coord.lat;
                    const lon = data.coord.lon;
                    const location = stadtName;
                    const minTemp = data.main.temp_min;
                    const maxTemp = data.main.temp_max;
                    const luftDruck= data.main.pressure;
                    const windGeschwindigKeit = data.wind.speed;
                    const windRichtung = data.wind.deg;
                    const boehen = data.wind.gust;
                    const icon = data.weather[0].icon;


                    // document.getElementById("wetter").textContent= wetter;
                    document.getElementById("wetter").innerHTML= `<img src="https://openweathermap.org/img/wn/`+icon+`@2x.png">`;
                    document.getElementById("wetterBeschreibung").textContent= wetterBeschreibung;
                    document.getElementById("temperatur").textContent= (temperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("location").textContent= location;
                    document.getElementById("maxTemp").textContent= (maxTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("minTemp").textContent= (minTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("gefühltTemp").textContent= (gefühlteTemperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("luftdruck").textContent= luftDruck+ " hp";
                    document.getElementById("windgeschwindigkeit").textContent= (windGeschwindigKeit *3.6).toFixed(0) + " km/h";
                    document.getElementById("windrichtung").textContent= windRichtung + " °";
                    document.getElementById("böhen").textContent= boehen + " km/h";
                    // console.log(windRichtung);   
                })
}
console.log(version1())

document.addEventListener("click", version1);

var inputStadt = document.body.querySelector("standort");

inputStadt = "London"


const version2 = () => {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" +inputStadt+",&appid=034b30eb230e77ea19f67cc74c9589f1")
    .then(response=> {
        if(response.ok === false) {
            throw new Error ("Fetch konnte nicht geladen werden")
        }
        return response.json();
    })
    .then(data => {
        const late = data[0].lat;
        const longe = data[0].lon;

        return fetch("https://api.openweathermap.org/data/2.5/weather?lat=" +late+"&lon=" +longe +"&appid=034b30eb230e77ea19f67cc74c9589f1");
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Daten konnten nicht geladen werden");
        }
        return response.json();
    })
    .then(data => {
            const stadtName= data.name;
            const temperatur = data.main.temp;
            const gefühlteTemperatur = data.main.feels_like;
            const wetter = data.weather[0].main;
            const wetterBeschreibung = data.weather[0].description;
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            const location = stadtName;
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;
            const luftDruck= data.main.pressure;
            const windGeschwindigKeit = data.wind.speed;
            const windRichtung = data.wind.deg;
            const boehen = data.wind.gust;
            const icon = data.weather[0].icon;
            console.log(stadtName);

            document.getElementById("wetter").innerHTML= `<img src="https://openweathermap.org/img/wn/`+icon+`@2x.png">`;
                    document.getElementById("wetterBeschreibung").textContent= wetterBeschreibung;
                    document.getElementById("temperatur").textContent= (temperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("location").textContent= location;
                    document.getElementById("maxTemp").textContent= (maxTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("minTemp").textContent= (minTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("gefühltTemp").textContent= (gefühlteTemperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("luftdruck").textContent= luftDruck+ " hp";
                    document.getElementById("windgeschwindigkeit").textContent= (windGeschwindigKeit *3.6).toFixed(0) + " km/h";
                    document.getElementById("windrichtung").textContent= windRichtung + " °";
                    document.getElementById("böhen").textContent= boehen + " km/h";

    })

}

console.log(version2());