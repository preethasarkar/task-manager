import React from "react";
import {Avatar, Checkbox, Grid,Paper, TextField, FormControlLabel, Button, Typography, Link} from "@mui/material";
import Task from "./task";


let data; 

function Login(){

    const [isMouseOver, setMouseOver]=React.useState(false);
    const [isAuthenticated, setIsAuthenticated]=React.useState(false);

    function mouseover(){
        setMouseOver(true);
    }

    function mouseout(){
        setMouseOver(false);
    }

    async function handleform(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        data = {
          username: formData.get("username"),
          password: formData.get("password"),
        };

        const response = await fetch(process.env.REACT_APP_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        if (result.success) {
          setIsAuthenticated(true);
        }
      }


    const paperStyle={
        padding: "20px",
        margin:"20px auto",
        height: "70vh",
        width: "280px"
    }
    return(
        <div>
          {isAuthenticated ? <Task username={data.username}/> : (
            <Grid> 
                <Paper elevation={10} style={paperStyle}>
            <form onSubmit={handleform} autoComplete="off">
                    <Grid container direction="column" alignItems="center">
                        <Avatar />
                        
                        <h2>Sign In</h2>
                        <TextField name="username" label="username" placeholder="Enter username" fullWidth required/>
                        <TextField name="password" label="password" placeholder="Enter password" type ="password" fullWidth required/>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        <Button onMouseOver={mouseover} onMouseOut={mouseout} type="submit" color={isMouseOver ? "success" : "primary"} variant="contained" fullWidth required >Sign In</Button>
                        
                    </Grid>
            </form>    
                    <Typography>
                            <Link href="#" >Forgot password ?</Link>
                    </Typography>
                    <Typography>
                            <Link href="#" >Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>)}
        </div> 
    );
}
export default Login;
