const user = {
  name: "Vance",
  age: 33,
};

console.log(user["name"]);

// user = 1000
// we cannot reassign something to a constant variable

// right approach
user.name = "Joy Boy";

console.log(user);

const numbers = [5, 10, 15];

numbers[0] = "Laurent";
console.log(numbers);

numbers.push(20);
console.log(`The updated array is now ${numbers}`);
console.log(numbers);