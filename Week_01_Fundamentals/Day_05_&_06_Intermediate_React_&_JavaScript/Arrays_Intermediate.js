const numbers = [1, 4, 8, 9];

// push() -------------

numbers.push(23);

// includes() -------------

console.log(numbers.includes(1));

// forEach() -------------

numbers.forEach(function (number) {
  console.log(number * 2);
});

numbers.forEach((number) => console.log(number * 2));

const multiplyByTwo = (number) => console.log(number * 2);

numbers.forEach(multiplyByTwo);

// Objects in array -------------

const data = [
  {
    name: "Louis",
    age: 21,
  },
  {
    name: "Vincent",
    age: 15,
  },
  {
    name: "Marienella",
    age: 20,
  },
];
console.log("The Name of the student is " + data[2].name);
console.log(data[1].age);
console.log(data[2].name);
