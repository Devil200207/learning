const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyparser.json());

app.use(express.static(__dirname));
const port = 4000;
let todos = [];


app.get("/todos",(req,res)=>{
    res.send(todos);
})  

app.post("/todos",(req,res)=>{
    const newtods = req.body;
    todos.push(newtods);
    console.log(todos);
    res.status(201).json(newtods);
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'first.html'));
  });
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})