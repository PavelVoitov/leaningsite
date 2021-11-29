let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let weather = ['Sunny', 'Windy', 'Partly Sunny', 'Partly Cloudy', 'Cloudy', 'Raining', 'Snowing', 'Thunderstorm', 'Foggy'];
let maxTemp = 100;
let minTemp = 0;
let lemonadeCost = 0.5;
let dailyTemp = [];

//обработчик заказов
document.getElementById("OpenTheStand").addEventListener("click",openTheStand);

generalWeather();
// генерация погодных условий для рабочей недели
function generalWeather () {
    let weatherToday;
    let tempToday;

    for (let i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp -minTemp) + minTemp);
    dailyTemp[i] = tempToday;
    document.getElementById("5DayWeather").innerHTML += "<div id = '" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + "degrees.</div>";
    }
}

//Вычисление объемов продаж

function openTheStand() {
    let glassesSold = 0;
    let totalGlasses = 0;
    let glassesLeft;
    resetForm();

let numGlasses = Number (document.getElementById("numGlasses").value);
let glassPrice = Number (document.getElementById('glassPrice').value);

for (let i = 0; i < days.length; i++) {

    //Объем продаж в зависимости от температуры и цены
    glassesSold = Math.floor (dailyTemp[i] / glassPrice);

    //Количество порций не проданного лимонада
    glassesLeft = numGlasses - totalGlasses;
    if (glassesSold > glassesLeft) {
        glassesSold = glassesLeft;
    }

    //Прибавление проданного за день к недельному объему
    totalGlasses = glassesSold + totalGlasses;

    //Отображение объема продаж за неделю
    document.getElementById('result').innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
}
displayRerults (numGlasses, glassPrice, totalGlasses);
}
//вычисление и вывод результата

function displayRerults (weeklyInventory, glassPrice, weeklySales) {
    let revenue = weeklySales * glassPrice;
    let expense = weeklyInventory * lemonadeCost;
    let leftOver = weeklyInventory - weeklySales;
    let profit = revenue - expense;
    
    //Вывод недельного отчета
    document.getElementById("result").innerHTML += "<p>You sold a total of" + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById ("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById ("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}
 

function resetForm() {
    document.getElementById("result").innerHTML = "";
}
