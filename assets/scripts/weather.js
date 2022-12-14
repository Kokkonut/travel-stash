
// Declaring the function and fetching the weather API 

function fetchData(city) {
    var apiKey = '549aae77a3dc08100f08e1988c47e726';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
        + city + '&units=metric&appid='
        + apiKey)
        .then((response) => response.json())
        .then((data) => displayWeather(data));

}
// calling display weather function and extracting 'array located' content from api
function displayWeather(myData) {
    // console.log(myData);
    // console.log('date', myData.list[0].dt_txt);
    // console.log("location:", myData.city.name);
    // console.log("temperature:", myData.list[0].main.temp);
    // console.log("description:", myData.list[0].weather[0].description);
    // console.log("humidity:", myData.list[0].main.humidity);
    // console.log("wind:", myData.list[0].wind.speed);

    // document.querySelector('#id').innerText = connecting sj and html

    // for loop capturing (40/5) = 5 datapoints (same time each day) from 40 point array
    for (i = 0; i < 40; i += 8) {
        document.querySelector('#weather' + i + ' .city span').innerText = myData.list[i].dt_txt;
        //document.querySelector('#weather' + i + ' .city span').innerText = myData.city.name;
        document.querySelector('#weather' + i + ' .temp span').innerText = myData.list[i].main.temp.toFixed(1);
        document.querySelector('#weather' + i + ' .description span').innerText = myData.list[i].weather[0].description;
        document.querySelector('#weather' + i + ' .humidity span').innerText = myData.list[i].main.humidity;
        document.querySelector('#weather' + i + ' .wind span').innerText = myData.list[i].wind.speed;
    }


    //document.querySelector('#weather').style.visibility = 'visible';
}

function updateWeather() {
    //  var city = document.querySelector('#cityInput').value;

    var city = JSON.parse(localStorage.getItem('userLocation'));
    fetchData(city);

}
// event listener to trigger weather automatically from dashboard data input
window.addEventListener('load', updateWeather);



