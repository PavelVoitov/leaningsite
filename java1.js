// alert ("Привет!");
// let startQuestion = confirm ("Готов сегодня поучиться?");
// startQuestion ?
//  alert ('Очень рад такому ответу! Поехали!') 
//  : alert ('Очень жаль. Но тебе все равно придется это сделать!');


document.getElementById('welcome').style.transform = "rotate(-4deg)";

var welcome = document.getElementById("welcome");

welcome.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  var but = e.target;
  var top = 0;

  var id = setInterval(frame, 30) // draw every 10ms

  function frame() {
    but.style.top = top + '%';    
    top++;
    if (top === 8) {
      clearInterval(id);
    }
  }
  
}
document.getElementById("translateRussian").onclick = updateListRu;

function updateListRu () {
    document.getElementById('welcome').innerHTML = 'Привет мир!';
 };

 document.getElementById("translateEnglish").onclick = updateListEn;
  
 function updateListEn () {
    document.getElementById('welcome').innerHTML = 'Hello world!';
 };

//  let myName = 'Pavel';
//  document.write ('How are you?</br>');
//  document.write ("Я уже знаю что тебя называют " + myName + ". Садись и работай " + myName + '.</br>');
//  document.write('How old are you?</br>');


//  let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//  };

//  let sum = 0;
//  function isEmpty(obj)  { 
//      for (let key in obj)  { 
//        sum += obj[key];
//      } return sum;
//   };
// alert (isEmpty(salaries));

// let calculator = {
//   read () { this.num1 = +prompt ('Введите первое число', ''),
//  this.num2 = +prompt ('Введите второе число', ''); 
//   },
//   sum () { return this.num1 + this.num2},
//   mul () { return this.num1 * this.num2},
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// function BigUser() {

//   this.name = "Вася";

//   return { name: "Godzilla" };  // <-- возвращает этот объект
// }

// alert( BigUser().name );

// let accumulator = new Accumulator(1); // начальное значение 1
// this.name = 1,
// accumulator = {
//   read = function () { this.num1 = +prompt ('Введите первое число', ''); 
//   return this.sum1 = this.num1 + this.name
// },
// value = this.sum1
// };

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений