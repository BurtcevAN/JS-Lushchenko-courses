fetch('http://api.openweathermap.org/data/2.5/weather?id=543878&appid=3e9f633307dd2382a65daed06a2821c3')
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });