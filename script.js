var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// console.log(css);
// console.log(color1);
// console.log(color2)
function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ":";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellloooo";
  console.log(1, fun);
}

function funerFunction() {
  // child scope
  var fun = "Byeee";
  console.log(2, fun);
}

function funestFunction() {
  // child scope
  fun = "AHHHHH";
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

condition ? expr1 : expr2;

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");

function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied";
  }
}

var answer2 = condition();

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a moster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you find a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

// ECMA international

// ECMAScript === Javascript

// ES6 Ecmascript6

//let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

//Destructuring

// const obj = {
//   player: "bobby",
//   experience: 100,
//   wizardLevel: false,
// };

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;

//Object properties

const name = "john snow";
const obj = {
  [name]: "hello",
  [1 + 2]: "hihi",
};

const a = "Simon";
const b = true;
const c = {};

const obj = { a, b, c };

//Tempelate strings

const name = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${
  age - 10
}.What a lovely ${pet} you have`;

//default arguments
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${
    age - 10
  }.What a lovely ${pet} you have`;
}

//Symbols
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

//arrow
function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

//Advanced functions
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const newFunc = first();
newFunc();

//closures a function ran, the functione executed.its never going to execute again but its going to remember that there are references to those
// variables so the child scope always has access to the parent scope

//Currying
const multiply = (a, b) => a * b;
const curriedMulitply = (a) => (b) => a * b;
const multiplyBy5 = curriedMulitply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects, functional

var array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);

//map,filter,reduce

// const mapArray = array.map((num) => {
//   return num * 2;
// });

const mapArray = array.map((num) => num * 2);

console.log("map", mapArray);

//filters
// const filterArray = array.filterArray((num) => {
//   return num > 5;
// });

const filterArray = array.filter((num) => num > 5);

console.log("filter", filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);

console.log("reduce", reduceArray);

//objects
//referencetype
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// context vs scope

// function b() {
//   let a = a;
// }

const object4 = {
  a: function () {
    console.log(this);
  },
};

//Instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`weeeeeeeeeeee i'm a $(this.type)`);
  }
}

const wizard1 = new wizard("Shelly", "healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

//Includes
pets.includes("dog");
const pets = ["cat", "dog", "bat"];
const square = (x) => x ** 2;
const cube = (y) => y ** 3;

//string padding
// .padStart()
// .padEnd()

const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);

Object.values;
Object.entries;
Object.keys;

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username3: "Mr.Grinch",
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});

//Async await

const array3 = [1, 2, [3, 4, [5]]];
array3.flat();

const userEmail = "              eddytheagle@gmail.com";
const userEmail2 = "jonnydangerous@gmail";
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [["commanderTom", 23], ["derekZlander", 40], ["hansel,18"]];

const obj = Object.fromEntries(userProfiles);

Object.entries(obj);

try {
  bob + "hi";
} catch (error) {
  console.log("you messed up" + error);
}

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  orange: 10,
  grapes: 1000,
};

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach((item) => {
  console.log(item);
});

//for of
//Iterating
for (item of detailedBasket) {
  console.log(item);
}

//for in
// enumerating- objects
for (item in basket) {
  console.log(item);
}

basket = {
  0: "apples",
  1: "oranges",
  2: "grapes",
};

//bigint
//  type of 1n

//optional chaining operator
let will_pokemon = {
  pikachu: {
    speices: "Mouse POkemon",
    height: 0.4,
    weight: 6,
  },
};

let andrei_pokemon = {
  pikachu: {
    speices: "Mouse POkemon",
    height: 0.8,
    weight: 30,
    power: 0,
  },
};
// let weight = will_pokemon.pikachu.weight;
// console.log("weight:", weight);

// let weight = will_pokemon.pikachu.weight;
// console.log("weight:", weight);
// if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//   let weight2 = andrei_pokemon.pikachu.weight;
//   console.log(weight2);
// } else {
//   // let weight2 = andrei_pokemon.pikachu.weight;
//   // console.log("weight:", weight);
//   let weight2 = undefined;
//   console.log(weight2);
// }

// let weight3 = andrei_pokemon?.pikachu?.weight;
// console.log(weight3);

//Nullish Colescing Operator??
let power = andrei_pokemon?.pikachu?.power ?? "no power";
console.log(power);
//Debugging
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  // console.log("array", array);
  // console.log("accumulator", accumulator);
  debugger;
  // return [].concat([0, 1]);
  return accumulator.concat(array);
}, []);
