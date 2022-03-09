const url = "https://api.openweathermap.org/data/2.5/weather?id=4887398&appid=7b0ee1b9b07eebcc18188c3f0c258a2b&units=imperial";


        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let currentTemp = data.main.temp;
            
            document.querySelector('#curr-temp').innerText = currentTemp;

            //let city = data.name;
            //document.querySelector('#city').innerText = city;
            document.querySelector('#cond').innerText = data.weather[0].description;

            //https://openweathermap.org/img/wn/10d@2x.png
            let iconId = data.weather[0].icon;
            let iconSource = `http://openweathermap.org/img/wn/${iconId}@4x.png`;
            document.querySelector('#weather-icon').setAttribute('src', iconSource);

        })