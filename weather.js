let days = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday'];
let weather = ['Sunny', 'Windy', 'Partly Sunny', 'Partly Cloudy', 'Cloudy', 'Raining', 'Snowing', 'Thunderstorm', 'Foggy'];
let minTemp = 0;
let maxTemp = 60;

generateWeather();

function generateWeather() {
    for (let i = 0; i < days.length; i++ ) {
    let weatherToday = weather [Math.floor(Math.random() * weather.length)];    
    let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    document.getElementById("5DayWeather").innerHTML += "<div id='"+ days[i] + "' class='" + weatherToday + "' /><b>Frecast for " + days[i] + ":<b><br></></b>" + weatherToday + " and " + tempToday + " degrees.</div></>";
 }
}