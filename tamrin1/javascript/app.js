const button = document.getElementById("triggerBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Loading..."; 

  randomPromise()
    .then((message) => {
      output.textContent = message;
      console.log(message);  
    })
    .catch((error) => {
      output.textContent = error;
      console.error(error);
    });
});



function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("Hello World");
      } else {
        reject("Error occurred");
      }
    }, 1000);
  });
}

