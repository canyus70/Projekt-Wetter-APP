// hallo bruno hier ist mein branch: yusuf


// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=034b30eb230e77ea19f67cc74c9589f1')
//             .then(response=> {
//                 if(response.ok === false) {
//                     throw new Error ("Fetch konnte nicht geladen werden")
//                 }
//                 return response.json();
//                 // console.log(json())
//             })
//             .then (data => {
            
//                     const temperatur = data.main.temp;
//                     const gefühlteTemperatur = data.main.feels_like;
                    
//                     console.log(temperatur);
                    
//                 })



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
                    
                    console.log(lon);
                    
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






