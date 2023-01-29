'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//user account info:
//hard-coded
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements) {
  //will have movements array pass in

  //empty the container to remove the old records
  containerMovements.innerHTML = '';

  //loop through each movement of account 1
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `  
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    //using insertAdjacentHTML method to add HTML
    //use 'afterbegin'
    //add element before its first child,which is right after the beginning of target element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//create username property for each account owner
const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    //used the forEach method manipulated the account objects
    //adding in a new property for each account
    acc.username = acc.owner
      .toLowerCase()
      .split(' ') //spilt full name by space
      .map(
        //create a new array contains usernames for account owners
        name => name[0] //need the first letter for each word
      )
      .join('');
  });
};
createUsernames(accounts);
//produce the username/initial of a user
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //The map method, will return a new array with new elements
// const eurToUsd = 1.1;
// //call back function
// const movementsUSD = movements.map(mov => mov * eurToUsd); //=> means return the following values

// console.log(movements);
// console.log(movementsUSD);

// //The following acts the same as the map method above
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Move ${i + 1}:You ${mov > 0 ? 'deposited' : 'withdraw'}${Math.abs(mov)}`
// );
// //Testing the above
// console.log(movementsDescriptions);

/////////////////////////////////////////////////
