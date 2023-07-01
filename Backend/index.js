
const express = require('express');
const app = express();
app.use(express.json());
const {connection} = require('./Config/db')
require('dotenv').config();


app.get("/",(req,res)=>{
    console.log("HOME");
    res.send("WELCOME TO GOLD STONE HOME PAGE")
})


//database connection
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected")

    }catch(err){
        console.log("NOT Connected");
        console.log(err);
    }
    console.log(`CONNECT SERVER TO ${process.env.port} PORT`)
})
