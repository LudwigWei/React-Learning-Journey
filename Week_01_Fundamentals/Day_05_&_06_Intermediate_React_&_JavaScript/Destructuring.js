const user = {
  name: "Ivory",
  age: 11,
  hobbies: ["Roblox", "Brainrots"],
  nationality: "Filipino",
};

const { name, nationality } = user;

console.log(name, nationality);
console.log(`${name} is a ${nationality}`);

const arrays = [5, 10, 15, 20];

const [a] = arrays;
console.log(a);

console.log(`${name} is a ${nationality} and she is very rich as she has ${a} cars.`);
