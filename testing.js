const substract = a => b => a - b;

const add3 = substract(3);

const result = add3(5);

console.log(result);







// const calc = initValue => {
//     let result = initValue;

// const calculator = {
//     add(value) {
//         result += value;
//         return calculator;
//     },


//     mult(value) {
//         result *= value;
//         return this;
//     },
//     div(value) {
//         result /= value;
//         return this;
//     },
//     substract(value) {
//         result -= value;
//         return this;
//     },

//     result() {
//         return result;
//     }

// };
//     return calculator;
// };

// const result = calc(3).add(2).mult(4).div(10).substract(5).result();

// console.log(result);




























// // class Wallet {
// //     constructor() {
// //         this._balance = 0;
// //     }

// //     getBalance() {
// //         return this._balance;
// //     }

// //     deposit(amount) {
// //         this._balance += amount;
// //     }

// //     withdraw(amount) {
// //         if (amount > this._balance) {
// //             console.log("No enouhg funds");
// //             return;
// //         }
    
// //     this._balance -= amount;
// //     }
// // }

// // const wallet1 = new Wallet();

// // console.log(wallet1.getBalance());

// // wallet1.deposit(45);

// // console.log(wallet1.getBalance());

// // wallet1.withdraw(11);

// // console.log(wallet1.getBalance());

// // wallet1.withdraw(101);

// const task = [
//     { text: "Buy milk", done: false},
//     { text:'Pick up Tom from airport', done: false},
//     { text:'Visit party',done: false},
//     { text:'Visit doctor', done: true},
//     { text:'Buy meat', done: false},                 
// ];

// const renderListItems = ListItems => {
//     const listElem = document.querySelector('.list');

//     const listItemsElems = ListItems
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done }) => {
//         const ListItemElem = document.createElement('li');
//         ListItemElem.classList.add('list_item');
//         if (done) {
//             ListItemElem.classList.add('list_item_done');

//         }
//         const checkboxElem = document.createElement('input');
//         checkboxElem.setAttribute('type', 'checkbox');
//         checkboxElem.setAttribute('checked', done);
//         checkboxElem.checked = done;
//         checkboxElem.classList.add('list_item-checkbox');
//         ListItemElem.append(checkboxElem, text);

//         return ListItemElem
// });

// listElem.append(...listItemsElems);
// };

// renderListItems(task);

// const elem = document.querySelector(".action");
// const buttonElement = document.querySelector('.btn');

// const logTarget = (text, color) => {
//     const eventTaskInput  = document.querySelector(".list");

//     eventTaskInput.innerHTML += `<span style='color: ${color}; margin-left: 4px'>${text}</span>`;
// }

// const logGreenAction = logTarget.bind(null, 'Action', 'green');
// const logGreenButton = logTarget.bind(null, 'Button', 'blue');

// elem.addEventListener('click', logGreenAction, true);
// buttonElement.addEventListener('click', logGreenButton, true);
