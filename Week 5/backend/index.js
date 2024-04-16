const express = require("express");
const app = express();
const {todo} = require("./db.js");
const cors = require("cors");
const {addTodo,updateTodo} = require("./types.js");


app.use(express.json());
app.use(cors());

app.post("/todos",async (req,res) =>{
    const todoBody = req.body;
    const todopayload = addTodo.safeParse(todoBody);

    if(todopayload.success)
    {
        await todo.create({
            title: todoBody.title,
            description: todoBody.description,
        })

        res.status(201).json({
            msg:"Todo created successfuly"
        });
    }
    else
    {
        res.status(400).send("Invalid data");
        return;
    }

})

app.get("/todos",async (req,res) =>{

    const todos = await todo.find();
    res.status(200).json(todos);

})

app.put("/completed",async (req,res) =>{
    const Id = req.body;
    const Idpayload = updateTodo.safeParse(Id);
    
    if (Idpayload.success)
    {
        await todo.updateOne({_id:Id.id},{completed:true});
        res.status(200).json({
            mag:"Todo updated successfully"
        });
    }
    else
    {
        res.status(400).send("Invalid Todo");
        return;
    }

})


app.listen(3000);