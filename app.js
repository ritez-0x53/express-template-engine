const express = require("express");
const app = express();
const ejs = require("ejs");

// dummy data....
const pages = {
  about: "This is about page",
  home: "This is home page",
  profile: "This is profile page",
  author: "Riteswar",
};

//! view engine...
app.set("view engine", "ejs");

// root route
app.get("/", (req, res) => {
  // rendering ejs file and passing pages object in it
  res.render("./home.ejs", { pages: pages });
});

// profile route with get method.
app.get("/profile", (req, res) => {
  // rendering ejs file and passing pages object in it
  res.render("./profile.ejs", { pages });
});

// about route with get method
app.get("/about", (req, res) => {
  // rendering ejs file and passing pages object in it
  res.render("./about.ejs", { pages });
});

app.listen(4000);
