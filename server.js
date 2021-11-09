const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const server = express();
const Sequelize = require("sequelize");
const { Food } = require("./models");

server.use("/", express.static(__dirname + "/public"));
server.use(express.json());

//template engine
server.engine("html", es6Renderer);
server.set("views", "views");
server.set("view engine", "html");

server.get("/", (req, res) => {
  res.render("home", {
    partials: {
      head: "partials/head",
    },
  });
});

//post request that connects to the database
server.post("/add-food", async (req, res) => {
  const { food, calories, carbs, protein, fat, fiber } = req.body;
  const newUser = await Food.create({
    food,
    calories,
    carbs,
    protein,
    fat,
    fiber,
  });
  res.json({
    id: newUser.id,
  });
});

//route to show list of foods in the database
server.get("/list", async (req, res) => {
  const foods = await Food.findAll();

  const html = foods
    .map((food) => {
      return `
      <div class="card" style="width: 18rem; background-color: lightgrey; text-align:center;">
    
      <div class="card-body">
        <h5 class="card-title">${food.food}</h5>
        
          <p> <em>Calories</em>: ${food.calories} </p>
          <p><em>Carbs</em>: ${food.carbs} </p>
          <p><em>Protein:</em> ${food.protein} </p>
          <p><em>Fat:</em> ${food.fat} </p>
          <p><em>Fiber:</em> ${food.fiber} </p>
          <button  type="button" class="btn btn-danger">Delete</button>
        
        
      </div>
    </div>`;
    })
    .join("");

  //render the list of foods
  res.render("list", {
    locals: {
      foods: html,
    },
    partials: {
      head: "partials/head",
    },
  });
});

//delete food from database

server.listen("8080", () => {
  console.log("The server is running at port 8080");
});
