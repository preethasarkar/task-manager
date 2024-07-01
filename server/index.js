import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";

const app = express();

//Establishing database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "task-manager",
    password: "preetha",
    port: 5432,
});

//Checking for connection errors
db.connect((err)=>{
    if(err) {
        console.log("Database connection failed");
    }else{
        console.log("Connection successfull");
    }
})


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/submit", async(req, res) => {
    console.log(req.body);
    try{
        const result= await db.query(`select username, password from credentials where username=$1 and password= $2`,[req.body.username,req.body.password]);
        if(result.rows.length >0){
            console.log("Succesfully logged in");
            res.json({success:true});
        }
        else{
            console.log("Invalid credentials");
            res.json({success:false});
        }
    }catch(err){
        console.log("Error retrieving query:",err.message);
        res.json({success:false});
    }
    
        
})

app.listen(5500, () => {
    console.log("Listening on port 5500");
})