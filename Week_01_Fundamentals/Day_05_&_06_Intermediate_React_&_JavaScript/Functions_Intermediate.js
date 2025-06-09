// Practicing different function approaches

function printNumbers() {
  const newNumber = 1000;
  console.log(newNumber);
}

// arrow function -----------
const printNumber = () => {
  const newNumber = 1000;
  console.log(newNumber);
};

printNumber();

// calling other functions in function body -----------
const logHello = () => {
  console.log("Hello");
  console.log("Hola!");
};

const printNumbers = () => {
  const newNumber = 1000;
  console.log(`The number is ${newNumber}`);
  logHello();
  console.log("Taiwan is a country.");
};

printNumbers();

// refactoring -----------
const logGreetings = () => {
  console.log("Good morning");
  console.log("Hello everyone!");
};

const greetLouis = () => {
  console.log("I am Louis!");
  console.log(1000);
  logGreetings();
};

const greetEm = () => {
  console.log("I am Em!");
  console.log(true);
  logGreetings();
};

// early return / stop function execution -----------
const checkValidity = (num) => {
  if (num < 10) {
    console.log(`Num is less than ${num}`);
    return;
  }

  console.log(`Num is greater than ${num}`);
};

checkValidity(10);
