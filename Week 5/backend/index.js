const express = require("express");
const zod = require("zod");
const app = express();

import {addTodo,updateTodo} from "./types.js";


app.use(express.json());

app.post("/todos",(req,res) =>{
    const title = req.body.title;
    const description = req.body.description;

    try
    {
        addTodo.safeParse({title:title,description:description});``
    }
    catch (e)
    {
        res.send(404).json({
            msg:e
        })
    }

})

app.get("/todos",(req,res) =>{

})

app.put("/completed",(req,res) =>{

})


app.listen(3000);