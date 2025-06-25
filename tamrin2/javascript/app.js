
import { doubleAndAdd } from "./doubleAndAdd.js";

const button = document.getElementById("calcBtn");
const resultText = document.getElementById("result");
const firstText = document.getElementById("firstNumber");
const secondText = document.getElementById("secondNumber");

button.addEventListener("click", async () => {
  resultText.textContent = "Loading...";
  firstText.textContent = "";
  secondText.textContent = "";
  console.log("Loading...");

  try {
    const first = await import("./fetchData.js").then(m => m.fetchData());
    const second = await import("./fetchData.js").then(m => m.fetchData());

    firstText.textContent = `First number: ${first}`;
    secondText.textContent = `Second number: ${second}`;
    console.log("Number1:", first);
    console.log("Number2:", second);

    if (first < 2 || second < 2) {
      throw new Error("RangeError: Not in valid range");
    }

    const result = first * 2 + second;
    resultText.textContent = `Result: ${result}`;
    console.log("Result:", result);
  } catch (err) {
    resultText.textContent = `Error: ${err.message}`;
    console.error("Error:", err.message);
  }
});

