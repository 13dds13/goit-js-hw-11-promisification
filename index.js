// Задание 1

console.log('------------------------');
console.log('Задание 1');
console.log('------------------------');

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(ms), ms);
  })
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

//  ===================================================================== //

// Задание 2

setTimeout(() => {
  console.log('------------------------');
  console.log('Задание 2');
  console.log('------------------------');



const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user);

    return new Promise(resolve => resolve(updatedUsers));
};

const loggerTwo = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(loggerTwo);
  toggleUserState(users, 'Lux').then(loggerTwo);
  
  }, 2500);

//  ===================================================================== //

// Задание 3
setTimeout(() => {
  

console.log('------------------------');
console.log('Задание 3');
console.log('------------------------');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({id}) => {
    const delay = randomIntegerFromInterval(200, 500);
    const canProcess = Math.random() > 0.3;

    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canProcess) {
            resolve({id, delay});
            } else {
            reject(id);
            }
        }, delay);})

    return result;
};

const logSuccess = ({id, delay}) => {
    console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = ({id}) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

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

  }, 3000);
