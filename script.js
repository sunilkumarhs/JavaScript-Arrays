'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('Slice method');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice(-1, -3));
console.log(arr);

console.log('Splice method');
console.log(arr.splice(2, 4));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log('Reverse method');
console.log(arr2.reverse());
console.log(arr2);

console.log('Concat method');
console.log(arr.concat(arr2));
const letters = arr.concat(arr2);
console.log(letters);
console.log(arr);

console.log('Join method');
console.log(letters.join('-'));
console.log(letters);

console.log('At method');
console.log(letters.at(0));
console.log(letters.at(-2));
const word = 'Sunil';
console.log(word.at(0));
console.log(word.at(-3));

console.log('ForEach method');
const transactions = [
  1000, 500, -200, 4000, -3000, 5000, -300, 600, -200, 1500,
];
for (const [i, tranc] of transactions.entries()) {
  if (tranc > 0)
    console.log(
      `Your transaction: ${i + 1} - Deposited ${
        Math.abs(tranc) + '₹'
      } to your account`
    );
  else
    console.log(
      `Your transaction: ${i + 1} - Withdrawed ${
        Math.abs(tranc) + '₹'
      } from your account`
    );
}

console.log('------Foreach---------');

transactions.forEach(function (tranc, i, arr) {
  if (tranc > 0)
    console.log(
      `Your transaction: ${i + 1} - Deposited ${
        Math.abs(tranc) + '₹'
      } to your account`
    );
  else
    console.log(
      `Your transaction: ${i + 1} - Withdrawed ${
        Math.abs(tranc) + '₹'
      } from your account`
    );
});

const banks = new Map([
  ['SBI', 'State Bank of India'],
  ['KMB', 'Kotak Mahindra Bank'],
  ['KGB', 'Karnataka Gramin Bank'],
]);

banks.forEach(function (value, key, arr) {
  console.log(`${key} : ${value}`);
});

const banks1 = new Set(['SBI', 'KMB', 'KGB']);
banks1.forEach(function (value, key, arr) {
  console.log(`${key} : ${value}`);
});

console.log('Challenge 1');
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const sortedDogsJulia = dogsJulia.slice(1, -2);
  console.log("Julia's Data");
  sortedDogsJulia.forEach(function (age, i) {
    const result =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(result);
  });
  console.log("Kate's Data");
  dogsKate.forEach(function (age, i) {
    const result =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(result);
  });
  console.log('Overall from both');
  const dogsAge = sortedDogsJulia.concat(dogsKate);
  dogsAge.forEach(function (age, i) {
    const result =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(result);
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);

console.log('map,filter,reduce methods');

const oneUSD = 0.012;

const transactionUSD = transactions.map(tranc => tranc * oneUSD);
console.log(transactions);
console.log(transactionUSD);

const transactionDetail = transactions.map(
  (tranc, i) =>
    `Your ${i + 1} transaction - ${
      tranc > 0 ? 'Deopited' : 'Withdrawed'
    } ${Math.abs(tranc)}`
);
console.log(transactionDetail);

const deposits = transactions.filter(function (tranc) {
  return tranc > 0;
});
console.log(deposits);

const withdrawals = transactions.filter(tranc => tranc < 0);
console.log(withdrawals);

const balance = transactions.reduce(function (bal, tranc, i) {
  console.log(`Transaction ${i} : ${bal}`);
  return bal + tranc;
}, 0);
console.log(`Balance : ${balance}`);

const maximum = transactions.reduce(
  (max, tranc) => (max > tranc ? max : tranc),
  transactions[0]
);
console.log(`Maximum : ${maximum}`);

console.log('Challenge 2');
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
  console.log(humanAge);
  const adultHumanAge = humanAge.filter(age => age >= 18);
  console.log(adultHumanAge);
  const avgAdultHumanAge = adultHumanAge.reduce(
    (avg, age, _, arr) => avg + age / arr.length,
    0
  );
  console.log(avgAdultHumanAge);
};

// const ages = [5, 2, 4, 1, 15, 8, 3];
const ages = [16, 6, 10, 5, 6, 1, 4];
calAverageHumanAge(ages);

console.log('Pipelining');
const totalDepositUSD = transactions
  .filter(tranc => tranc > 0)
  .map(tranc => tranc * oneUSD)
  .reduce((dep, tranc) => dep + tranc, 0);

console.log(`Total Deposit in USD : ${totalDepositUSD}`);

console.log('Challenge 3');
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const arrowCalAveragehumanAge = function (ages) {
  const avgHumanAge = ages
    .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter((age, _, arr) => {
      console.log(arr);
      return age >= 18;
    })
    .reduce((avg, age, _, arr) => {
      console.log(arr);
      return avg + age / arr.length;
    }, 0);
  console.log(avgHumanAge);
};

arrowCalAveragehumanAge(ages);

// const transactions = [
//   1000, 500, -200, 4000, -3000, 5000, -300, 600, -200, 1500,
// ];

console.log('Find method');
const firstWithdrawel = transactions.find(tranc => tranc < 0);
console.log(transactions);
console.log(firstWithdrawel);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
console.log(account);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian Rupee'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayTransactions = function (transactions) {
  containerMovements.innerHTML = '';
  transactions.forEach(function (tranc, i) {
    const type = tranc > 0 ? 'deposit' : 'withdrawal';
    const trancRow = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${tranc}₹</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', trancRow);
  });
};

displayTransactions(account1.transactions);

const totalBalance = function (transactions) {
  const balance = transactions.reduce((bal, tranc) => bal + tranc, 0);
  labelBalance.textContent = `${balance} INR`;
};
totalBalance(account1.transactions);

const totalSummaryDisplay = function (transactions) {
  const totalDeposit = transactions
    .filter(tranc => tranc > 0)
    .reduce((dep, tranc) => dep + tranc, 0);
  labelSumIn.textContent = `${totalDeposit} ₹`;

  const totalWithdraw = transactions
    .filter(tranc => tranc < 0)
    .reduce((wit, tranc) => wit + tranc, 0);
  labelSumOut.textContent = `${Math.abs(totalWithdraw)} ₹`;

  const totalIntrest = transactions
    .filter(tranc => tranc > 0)
    .map(tranc => (tranc * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((tot, int) => tot + int, 0);
  labelSumInterest.textContent = `${totalIntrest} ₹`;
};

totalSummaryDisplay(account1.transactions);

const createusername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createusername(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});
