
'use strict'
// const callbackPrompt = {
//     message: 'Здесь будет появляться сообщение каждые 5 секунд.\nПока Вы не возьмете меня на работу!',
//     showPrompt() {
//         const userAnswer =  prompt(this.message, "Лучше ответить 'Да.'");
//         console.log(userAnswer);
//         if (userAnswer === 'да') {
//             alert('Потрясающе! У Вас прекрасный выбор!')
//         } else if (userAnswer === "yes") {
//             alert('Oy! My God! Do you speak English?')
//         } else if (userAnswer === null && "Лучше ответить 'Да.'") {
//             alert("Мы скоро встретимся снова!");
//             function defer(func, ms) {
//                 return function() {
//                     setTimeout(() => func(...arguments), ms)
//                 }
//             }
//             const deferredSayHi = defer(this.showPrompt.bind(this), 3000 )
//             deferredSayHi(); 
//         }  else {
//             console.log('Ничего им не отвечай. Тссс.');
//             function defer(func, ms) {
//                 return function() {
//                     setTimeout(() => func(...arguments), ms)
//                 }
//             }
//             const deferredSayHi = defer(this.showPrompt.bind(this), 3000 )
//             deferredSayHi();
//             }
// }
// }

// callbackPrompt.showPrompt();

// const obj = {
//     name: 'Bill',
//     sayHi() {
//         console.log(this.name);
//     },
// };


// const events = {
//     quests: [
//         {name: "Bob", email: "B@gmail.com", age: 14},
//         {name: "Fred", email: "F@gmail.com", age: 19}
//     ],
// message: "Welcome to the party",
// getInvintation() {
//     return this.quests
//     .filter(({ age }) => age >= 18)
//     .map(({name, email}) => ({
//         text: `Hi ${name}. ${this.message}`,
//         email
//     }));
// }
// }
// console.log(events.getInvintation());



// class Vehicle  {

//     constructor(name, hasWheels) {
//         this.name =  name;
//         this.hasWheels = hasWheels;
//         }

//     move() {
//         console.log(`${this.name} moving.`);
//     }
//     stop() {
//         console.log(`${this.name} stopped.`);
//     }
// };

// class Ship extends Vehicle  {
//     constructor(name, speed) {
//         super(name, false);
//         this.speed = speed;
//     }

//     startMachine() {
//         console.log(`${this.name} lifting anchor up.`); 
//         this.move();
//     }
//     stopmachine() {
//         this.stop();
//         console.log(`${this.name} lifting anchor down.`);
//     }
// };

// const ship1 = new Ship("Aurora", 25);

// ship1.startMachine();





// Object.setPrototypeOf(ship, vehicle);

// for (let key in ship) {
//     if (ship.hasOwnProperty(key)) {
//     console.log(key);
// }
// }

// console.log(Object.keys(ship));



// class User {
// constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }

// static compare(user1, user2) {
//     return user1.age - user2.age;
// }

// sayHi() {
//     console.log(`Hi! I am ${this.name}`);
// }

// requestNewPhoto() {
//     console.log("New photo request was sent for ... ")
// }

// setAge(value) {
//     if (value < 0) {
//         return false;
//     }
//     this.age = value;
//     if (value >= 25) {
//         this.requestNewPhoto();
//     }
//     return value;
//     }
// }

// const user1 = new User('Bill', 17);
// const user2 = new User("Jerry", 25);

// user1.sayHi();
// console.log(user2);
// // const user2 = new User('Bill', 32);

// console.log(User.compare(user1, user2));





// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.sayHi = function() {
//         console.log(`Hi! I am ${this.name}`);
//     };
// }

// const user1 = new User ('Bill', 25);

// console.log(user1);

// user1.sayHi();

// const user2 = new User ('George', 29);

// console.log(user2);

// user2.sayHi();


const NewPicture = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let img = new Image();
// img.onload = drawImageActualSize;

const img = new Image(NewPicture);

img.src = 'https://i.ibb.co/HPVb75L/7.png';



// function drawImageActualSize() {
//     canvas.width = this.naturalWidth;
//     canvas.height = this.naturalHeight;
//     ctx.drawImage(this, 0, 0);
//     // ctx.drawImage(this, 0, 0, this.width, this.height);
// }
