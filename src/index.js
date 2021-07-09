const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.age) / 13;
  // res.send("Your age in Dog year is :" + age + " dog year");
  res.send(
    "Hello " +
      req.body.username +
      " your email id is : " +
      req.body.email +
      " and your telephone number is : " +
      req.body.tel +
      " and your Dog year is " +
      age +
      " Dog year. "
  );
});

app.listen(port);
