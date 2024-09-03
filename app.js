let url = "https://api.openweathermap.org/data/2.5/weather";
let API_Key = "65f202d5751b55418d4affffe29557e5";

let img = document.querySelector(".card-img-top");


async function weather(city) {
    try {
        let response = await fetch(`${url}?q=${city}&appid=${API_Key}&units=metric`);
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".Weather").innerHTML = "Weather : " + data.weather[0].description;
        document.querySelector(".Max_temp").innerHTML = "Max_temp : " + data.main.temp_max;
        document.querySelector(".Min_temp").innerHTML = "Min_temp : " + data.main.temp_min;
        document.querySelector(".humidity").innerHTML = "humidity : " + data.main.humidity;
        document.querySelector(".wind").innerHTML = "wind : " + data.wind.speed;

        if (data.weather[0].main == "Clouds") {
            img.src = "./Public/Cloudy weather.jpg"
        }
        else if (data.weather[0].main == "Clear") {
            img.src = "./Public/Clear weather.jpg"
        }
        else if (data.weather[0].main == "Drizzel") {
            img.src = "./Public/Drizzel weather.jpg"
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "./Public/mist weather.jpg"
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "./Public/rainy weather.jpg"
        }
        else {
            img.src = "./Public/common.jpg"
        }

        document.querySelector(".main").style.visibility = "visible";

    }
    catch(e){
        alert("Unknown Country");
    }
}

let searchbox = document.querySelector("#ser");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function update() {
    let value = searchbox.value;
    weather(value);
});


