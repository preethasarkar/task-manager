import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app=express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.json({success:true});
})

app.listen(5500,()=>{
    console.log("Listening on port 5500");
})