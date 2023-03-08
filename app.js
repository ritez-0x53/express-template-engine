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

app.get("/", (req, res) => {
  res.render("./home.ejs", { pages: pages });
});

app.get("/profile", (req, res) => {
  res.render("./profile.ejs", { pages });
});

app.get("/about", (req, res) => {
  res.render("./about.ejs", { pages });
});

app.listen(4000);
