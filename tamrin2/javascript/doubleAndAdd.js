import { fetchData } from "./fetchData.js";

export async function doubleAndAdd() {
  try {
    const first = await fetchData();
    const second = await fetchData();

    console.log("Number1:", first);
    console.log("Number2:", second);

    if (first < 2 || second < 2) {
      throw new Error("RangeError: Not in valid range");
    }

    return first * 2 + second;
  } catch (error) {
    throw error;
  }
}
