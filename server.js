const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const server = express();
const Sequelize = require("sequelize");

//template engine
server.engine("html", es6Renderer);
server.set("views", "views");
server.set("view engine", "html");

server.get("/", (req, res) => {
  res.render("landing");
});

server.listen("8080", () => {
  console.log("The server is running at port 8080.");
});
