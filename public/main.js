const form = document.querySelector(".form-inline");
const input = document.querySelector(".form-control");
const nutritionFacts = document.querySelector(".nutrition-facts");
const calorieInput = document.querySelector("#calories");
const carbsInput = document.querySelector("#carbs");
const proteinInput = document.querySelector("#protein");
const fatInput = document.querySelector("#fat");
const fiberInput = document.querySelector("#fiber");
const foodImage = document.querySelector(".food-img");
const foodInput = document.querySelector("#food");
const foodLabel = document.querySelector("#food-label");
const urlInput = document.querySelector("#url");
const urlLabel = document.querySelector("#url-label");
const nutritionForm = document.querySelector("#nutrition");
const saveNotification = document.getElementById("save-notification");
const foodPyramid = document.querySelector("img");

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
      const imageURL = data.parsed[0].food.image;
      const fat = nutrients["FAT"];
      const carbs = nutrients["CHOCDF"];
      const fiber = nutrients["FIBTG"];
      const protein = nutrients["PROCNT"];
      const calories = nutrients["ENERC_KCAL"];

      foodInput.setAttribute("value", food);
      calorieInput.setAttribute("value", calories);
      carbsInput.setAttribute("value", carbs);
      proteinInput.setAttribute("value", protein);
      fatInput.setAttribute("value", fat);
      fiberInput.setAttribute("value", fiber);
      urlInput.setAttribute("value", imageURL);
      foodImage.setAttribute("src", imageURL);

      foodPyramid.style.display = "none";
      nutritionFacts.style.display = "block";
      urlInput.style.display = "none";
      urlLabel.style.display = "none";
      foodInput.style.display = "none";
      foodLabel.style.display = "none";

      //grab the data from the form
      nutritionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const body = stringifyFormData(data);
        console.log(body);
        postData("http://localhost:8080/add-food", body).then((response) => {
          console.log(response);
        });

        //render message saying food has been added to database
        const renderAlert = () => {
          saveNotification.innerText = `${food} has been added to your saved list!`;
        };

        renderAlert();

        const removeAlert = () => {
          saveNotification.innerText = "";
        };

        setTimeout(removeAlert, 2000);
      });
    });
});

//function on submit
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   const body = stringifyFormData(data);
//   console.log(body);
//   postData("http://localhost:8080/add-food", body).then((response) => {
//     console.log(response);
//   });
// };

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 4);
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: data, // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
