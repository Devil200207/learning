const express= require("express");
const zod = require("zod");
const app = express(); 

app.use(express.json()); // to parse the incoming requests with JSON payloads


function Uservalidation(req,res,next)
{
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "chinmay" || password != "123")
    {
        res.status(403).json({
            msg:"User doenst not exits"
        });
    }
    else
    {
        next();
    }
}

function KidneyValidator(req,res,next)
{
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2) 
    {
        res.status(411).json({
            msg:"Invalid kidneyId"
        });
    }
    else
    {
        next();
    }
}

app.get("/health-chekup",Uservalidation,(req,res) => {

    res.status(200).json({
        msg:"User kidney is fine"
    });
    return; 
})

app.post("/health-kidney",(req,res) => {

    const schema = zod.array(zod.number());
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({
    response
  })
})

app.post("/user-validator",(req,res) => {   //user validation using zod

    const schema = zod.object({
        username:zod.string().email(),
        password:zod.string().min(5)
    })

    const responce = schema.safeParse(req.body);
    
    if(!responce.success)
    {
        res.status(500).json({
            msg:"Invalid User"
        });
    }
    else{
        res.send(responce)
    }
    
})

app.use((err,res,req,next) =>   //error handling middleware
{
    res.status(500).json({
        msg:"Internal server error"
    });
    return;
})

app.listen(3000);