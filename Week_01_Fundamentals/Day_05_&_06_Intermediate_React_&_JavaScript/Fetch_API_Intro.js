const btnEl = document.querySelector(".btn");

const newUser = {
  name: "LudwigWei",
  job: "Data Scientist",
};

const clickHandler = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }  

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  // POST ------
  // const clickHandler = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });
  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.log(data.description);
  //       return;
  //     }

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // PUT ------
  // const clickHandler = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users/5", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });
  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.log(data.description);
  //       return;
  //     }

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // DELETE ------
  // const clickHandler = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users/5", {
  //       method: "DELETE"
  //     });
  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.log(data.description);
  //       return;
  //     }

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // .then syntax ------
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => {
  //     if (!res.ok) {
  //       console.log("Problem");
  //       return;
  //     }

  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });
};

btnEl.addEventListener("click", clickHandler);
