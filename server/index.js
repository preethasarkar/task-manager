import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";

const app = express();
let login_id;

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
    try{
        const result= await db.query(`select id,username, password from credentials where username=$1 and password= $2`,[req.body.username,req.body.password]);
        login_id=result.rows[0].id;
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

app.get("/task",async(req,res)=>{
    try{
        const date=new Date();
        const result= await db.query("Select task, category from todo join category on todo.category_id=category.category_id where login_id=$1 and task_date=$2",[login_id,date]);
        res.json(result.rows);
        
    }catch(err){
        console.log("Error retrieving query:",err.message);
        res.send("Error");
    }
})


app.listen(5500, () => {
    console.log("Listening on port 5500");
})