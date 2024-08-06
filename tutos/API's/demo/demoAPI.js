// console.log("coucou");
// mail pour api openweather:"monet98082@foraro.com" pwd = "testAPI1234"

const BTN = document.getElementById("getWeather");
// console.dir(BTN);
const RESULT = document.getElementById("result");
console.log(RESULT);


BTN.addEventListener("click",function(){
    // console.log("click");
    RESULT.textContent = "";
    let city = document.getElementById("city").value;
    console.log(city);
    let urlApi = "https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&appid=1d2561e99f83209cb6569f862eaf9c46&units=metric&lang=fr";
    
    // Requête AJAX ( = get en Jquery)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(data){
        // code
        if(xhr.readyState === 4){
            // console.log(data);//for debug

            // the response is a string that we parse in Json
            let response = JSON.parse(xhr.responseText)
            console.log(response);

            // We get the elements we need
            let description = response.weather[0].description;
            console.log(description);
            let tempMin = parseInt(response.main.temp_min);
            let tempMax = parseInt(response.main.temp_max);
            let temp = tempMin +"°C - "+ tempMax +"°C";
            console.log(temp);

            // RESULT.innerHTML= ``+{city}+``;
            RESULT.innerHTML = "<h2>"+city +"</h2>" + temp + "<br>"+ description;
        }        
    }
    xhr.open("GET",urlApi);
    xhr.send();

})
