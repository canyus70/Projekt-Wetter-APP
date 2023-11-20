
const version1 = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=034b30eb230e77ea19f67cc74c9589f1')
            .then(response=> {
                if(response.ok === false) {
                    throw new Error ("Fetch konnte nicht geladen werden")
                }
                return response.json();
                
            })
            .then (data => {
            
                    const temperatur = data.main.temp;
                    const gefühlteTemperatur = data.main.feels_like;
                    const wetter = data.weather[0].main;
                    const wetterBeschreibung = data.weather[0].description;
                    const lat = data.coord.lat;
                    const lon = data.coord.lon;
                    const location = "London";
                    const minTemp = data.main.temp_min;
                    const maxTemp = data.main.temp_max;
                    const luftDruck= data.main.pressure;
                    const windGeschwindigKeit = data.wind.speed;
                    const windRichtung = data.wind.deg;
                    const boehen = data.wind.gust;

                    document.getElementById("wetterlage").textContent= wetter;
                    document.getElementById("temperatur").textContent= (temperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("location").textContent= location;
                    document.getElementById("maxTemp").textContent= (maxTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("minTemp").textContent= (minTemp -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("gefühltTemp").textContent= (gefühlteTemperatur -273.15).toFixed(0) +" "+ "°C";
                    document.getElementById("luftdruck").textContent= luftDruck+ " hp";
                    document.getElementById("windgeschwindigkeit").textContent= windGeschwindigKeit+ " km/h";
                    document.getElementById("windrichtung").textContent= windRichtung + " °";
                    document.getElementById("böhen").textContent= boehen + " km/h";
                    console.log(windRichtung);
                    
                })
}
console.log(version1())

document.addEventListener("click", version1);

    


















// fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={034b30eb230e77ea19f67cc74c9589f1}')
//             .then(response=> {
//                 if(response.ok === false) {
//                     throw new Error ("Fetch konnte nicht geladen werden")
//                 }
//                 return response.json();
//                 console.log(json())
//             })
