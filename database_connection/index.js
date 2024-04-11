const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.dwpy7.mongodb.net/user_app",
);

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) { 
  // should check in the database

  const exitUser =  await User.findOne({ username:username,password:password });
 if(exitUser)
 {
    return true;
 }
 return false;
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const isUserExit = await userExists(username, password) 
  console.log(isUserExit);

  if (!isUserExit) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token, 
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const allUser = await User.find({username:{$ne:username}}); // return a list of users other than this username from the database
    return res.status(403).json({
       allUser,
      });
    
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);