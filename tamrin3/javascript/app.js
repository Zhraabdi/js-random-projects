const img = document.getElementById("dog-img");
const button = document.getElementById("refresh-btn");
const statusText = document.getElementById("status");



button.addEventListener("click", () => {
  img.style.visibility = "hidden";
  statusText.style.display = "block"; 

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    
    .then((data) => {
      console.log(data)
      img.src = data.message;
      img.onload = () => {
        img.style.visibility = "visible";
        statusText.style.display = "none"; 
      };
    })
    .catch((error) => {
      statusText.textContent = " خطا در دریافت تصویر ";
      console.error("Error:", error);
    });
});



 
  