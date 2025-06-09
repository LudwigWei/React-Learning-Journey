fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data[0]);
  })
  .catch((error) => {
    console.log(error);
  });
