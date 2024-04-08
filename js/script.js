const apiKey = 'a2b14d8498391139c7357c83129c2652';
let cityName = "Toronto"
let lon;
let lat;

fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`) // Fetch geocode info (long & lat)
    .then(response => response.json()) // Jsonify response
    .then(data => { // Update lon and lat variables to hold the retrieved coords
        lon = data[0].lon;
        lat = data[0].lat

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`) // Fetch weather info for city using long and lat
            .then(response => response.json())
            .then(data => {
                console.log(data.main)

                let info = document.createElement("p"); // Show data from api call to user
                info.innerText = "Temperature, humidity, and pressure of Toronto: " + data.main.temp + " | " + data.main.humidity + " | " + data.main.pressure;
                document.body.appendChild(info);

            })
    })

let myInfo = document.createElement("p");
myInfo.innerText = "Luca Marsman - 1247846";
document.body.appendChild(myInfo);

/* https://openweathermap.org/api/geocoding-api */
/* https://openweathermap.org/current */