"use strict";

// DEFAULT PARAMETERS

// Empty Array to hold recoreds.

const booked = [];

// Note we can do expresiion as well as use another default parameters
const createBooking = function (
  flightNum,
  passengerNum = 1,
  price = 199 * passengerNum
) {
  //ES6 default values
  // const createBooking = function (flightNum, passengerNum = 1, price = 199) {
  // Shortcircuting definng default values
  // ES5
  // passengerNum = passengerNum || 3;
  // price = price || 199;

  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  booked.push(booking);
};
createBooking("TD334");

// override default parameters

createBooking("LS234", 3, 444);
createBooking("LS234", 1);
createBooking("LS234", 5);

// first-class function

const word = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

// Higher order funtion calling first class funtions

const transform = function (str, fn) {
  console.log(`Original Text: ${str}`);
  console.log(`Transformed Text: ${fn(str)}`);
};

transform(
  "images which act as single characters and which can be vertically aligned relative to the text line",
  upperFirstWord
);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

// Function return function

const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings}, ${name}`);
  };
};
// hey is agrument for first function and sam is argument for second funtions.

greet("Hey")("Sam");

// using arrow funtion to create funtion return function.

const greets = (greetings) => (name) => console.log(` ${greetings}, ${name}`);

greet("Hey")("krish");

// The call and apply Methods

const airline = {
  flightName: "Lufthans",
  code: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.flightName}  ${this.code}${flightNum}`
    );

    this.booking.push({ flight: `${this.code}${flightNum}`, name });
  },
};

airline.book(234, "krishan chikara");

const newAirline = {
  flightName: "AirIndia",
  code: "AI",
  booking: [],
};

// We can assign book methods in newairlne as well with below solution or make copy of a function.

const book = airline.book;

// doesnt work becuase book doesnt know which object to call. becuase we used this in the main object
// book(241, "Sam Tring");

// to solve this problem we use call and apply methods with below methods.

book.call(newAirline, 456, "Sam jobs");

// Apply Method

const flightDetails = ["234", "Jerk tim"];

book.apply(newAirline, flightDetails);

// we can use spread in the call method it work just like apply.

book.call(airline, ...flightDetails);

console.log(airline, newAirline);

// bind method is like fixing the value in the funtion.

const bookNA = book.bind(newAirline);

// invoking this method on book newAirline
bookNA(23, "Tarzan sam");

// we can also bind the values.

const bookLH = book.bind(airline, 2345);

bookLH("Sarah Stewart");
