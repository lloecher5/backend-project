const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const server = express();
const Sequelize = require("sequelize");

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

server.listen("8081", () => {
  console.log("The server is running at port 8081.");
});
