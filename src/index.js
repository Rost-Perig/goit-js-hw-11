import './styles/styles.css';

import {
  colors,
  invColors,
  refs,
} from './js/source-refs';

import {
  onStartColorChange,
  onStopColorChange
} from './js/utils';

import { Timer } from './js/timer';

// const timer = new Timer(refs.FINAL_DATE, refs.days, refs.hours, refs.mins, refs.secs);

const { FINAL_DATE, days, hours, mins, secs, colons } = refs
const timer = new Timer(FINAL_DATE, days, hours, mins, secs, colons);

window.addEventListener('DOMContentLoaded', timer.startCount);
refs.changeColorStart.addEventListener('click', onStartColorChange);
refs.changeColorStop.addEventListener('click', onStopColorChange);
refs.startCount.addEventListener('click', timer.startCount);
refs.resetCount.addEventListener('click', timer.stopCount);


console.log("Привіт, світ! Життя брутальне!");


/*
 =========================================promisification============================================ 
 */

/* 
*ЗАДАНИЕ 1 - прикольно 
*/

const delay = ms => {
  // Твой код
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passed = Math.random() > 0.5;
            if (passed) {
                resolve(ms);
            }
            reject(`TASK 1: З ${ms}мс не склалося... ХАЛЕПА!`);
        },ms);
    });
};

const logger = time => console.log(`TASK 1: Resolved after ${time}ms`);

delay(2000)
    .then(logger)
    .catch(error => console.warn(error));
delay(1000)
    .then(logger)
    .catch(error => console.warn(error));
delay(1500)
    .then(logger)
    .catch(error => console.warn(error));


/* 
*ЗАДАНИЕ 1 - строго по заданию 
*/

// const delay = ms => {
//     // Твой код
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         },ms);
//     });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


/* 
*ЗАДАНИЕ 2 
*/
console.log('TASK 2')

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers);
    });
};    
    
const loggerTwo = updatedUsers => console.table(updatedUsers);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(loggerTwo);
toggleUserState(users, 'Lux').then(loggerTwo);



/* 
*ЗАДАНИЕ 3 - выполненное
*/
const makeTransaction = (transaction) => {
    
    return new Promise((resolve, reject) => {
     const delay = randomIntegerFromInterval(200, 500);    
    setTimeout(() => {
              
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
            resolve({ id:transaction.id, time:delay });
        } 
        reject(transaction.id);
        
    }, delay); 
    })
    
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = (obj) => {
  console.log(`TASK 3: Transaction ${obj.id} processed in ${obj.time}ms`);
};

const logError = id => {
  console.warn(`TASK 3: Error processing transaction ${id}. Please try again later.`);
};
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);








