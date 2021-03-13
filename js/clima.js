    link = "https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);

        document.getElementById('grados').innerHTML = Math.round(obj.main.temp - 273.15);
        document.getElementById('b2').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();

    link = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('f1').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        document.getElementById('f2').innerHTML = Math.round(obj.main.temp - 273.15);


        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();

    link = "https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('f4').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        document.getElementById('f5').innerHTML = Math.round(obj.main.temp - 273.15);


        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();

    link = "https://api.openweathermap.org/data/2.5/weather?q=Chia&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('c1').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        document.getElementById('c3').innerHTML = Math.round(obj.main.temp - 273.15);


        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();

    link = "https://api.openweathermap.org/data/2.5/weather?q=Cota&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('c4').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        document.getElementById('c6').innerHTML = Math.round(obj.main.temp - 273.15);


        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();

    link = "https://api.openweathermap.org/data/2.5/weather?q=Cajic%C3%A1&appid=63baf79de763c7e3a72771b6a2986903";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('c7').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        document.getElementById('c9').innerHTML = Math.round(obj.main.temp - 273.15);


        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
        }
    }
    request.send();