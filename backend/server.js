const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors"); // colors the code output on the terminal
const port = process.env.PORT || 8080;

//init express app
const app = express();

//Middlewares
app.use(cors());

//Routes
// app.get("/", (req, res) => {
//   //Serve the react app
//   res.status(200).json({ message: "Welcome" });
// });
//for production
app.use(express.static("dist"));

const usersList = [
  { id: 1, name: "Kenna", age: 7 },
  { id: 2, name: "Hikma", age: 3 },
  { id: 3, name: "Ramadan", age: 7 },
];
//get all users => end points
app.get("/api/users", (req, res) => {
  res.status(200).send(usersList);
});

//Listen for request
app.listen(port, () => {
  console.log(`Listining on port: ${port}...`);
});
