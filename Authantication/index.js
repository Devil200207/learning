// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array

//   const find = ALL_USERS.filter(user => user.username === username && user.password === password);
//   if(find.length > 0) {
//     return true
//   }
//     return false
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//     const find = ALL_USERS.filter(user => user.username != username);
//     res.status(201).json(find);
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000)

const express = require('express');
const app = express();
app.get("/health-checkup", function (req,res) {

  console.log("hiii");

  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  if( username != "Surya" || password != "12345678" ){
    res.status(400).json({"msg":"somthings up with your inputs"});
    return
  }
  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({"msg":"somthings up with your inputs"});
    return
  }

  res.json({
    "msg":"your kidney is good"
  });
}


);

app.listen(3000);