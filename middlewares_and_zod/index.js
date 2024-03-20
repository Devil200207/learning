const express= require("express");
const app = express(); 

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

app.get("/health-chekup",Uservalidation,KidneyValidator,(req,res) => {

    res.status(200).json({
        msg:"User kidney is fine"
    });
    return; 
})

app.use((err,res,req,next) =>   //error handling middleware
{
    res.status(500).json({
        msg:"Internal server error"
    });
    return;
})

app.listen(3000);