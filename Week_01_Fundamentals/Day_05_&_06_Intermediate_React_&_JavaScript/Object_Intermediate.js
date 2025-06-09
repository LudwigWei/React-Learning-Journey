// object in object -------------

const user = {
  name: "Marienella",
  age: 20,
  hobbies: ["biking", "working out", "cleaning"],
  address: {
    province: "Batangas",
    barangay: "Alupay",
  },
};

console.log(user.address.barangay);
console.log(
  `${user.name} is ${user.age} years old and is currently living in ${user.address.barangay}, ${user.address.province}`
);
console.log(`She likes ${user.hobbies[1]}`);

// property name is sometimes same s property value -------------

const username = input.value;
const password = input.value;

const newUser = {
  username: username,
  password: password,
};

// passing object as argument to function -------------

function logUser(user1) {
  console.log(user.name);
  console.log(user.age);
}

const logUser = (user1) => {
  console.log(user1.name);
  console.log(user1.age);
};

const user1 = {
  name: "LudwigWei",
  age: 21,
};

logUser(user1);
