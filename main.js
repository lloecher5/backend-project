const form = document.querySelector(".form-inline");
const input = document.querySelector(".form-control");
const nutritionFacts = document.querySelector(".nutrition-facts");
const calorieInput = document.querySelector("#calories");
const carbsInput = document.querySelector("#carbs");
const proteinInput = document.querySelector("#protein");
const fatInput = document.querySelector("#fat");
const fiberInput = document.querySelector("#fiber");

const food = input.value;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const food = input.value;

  fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=fd20ea77&app_key=3e7357736c3ed117cad651f4f2ba7028&ingr=${food}&nutrition-type=cooking`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const nutrients = data.parsed[0].food.nutrients;
      console.log(nutrients);
      const fat = nutrients["FAT"];
      const carbs = nutrients["CHOCDF"];
      const fiber = nutrients["FIBTG"];
      const protein = nutrients["PROCNT"];
      const calories = nutrients["ENERC_KCAL"];
      console.log(carbs);
      fatInput.innerText = fat;
      carbsInput.innerText = carbs;
      fiberInput.innerText = fiber;
      proteinInput.innerText = protein;
      calorieInput.innerText = calories;

      nutritionFacts.style.display = "block";
    });
});
