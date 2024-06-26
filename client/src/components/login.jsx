import React from "react";
import {Avatar, Checkbox, Grid,Paper, TextField, FormControlLabel, Button, Typography, Link} from "@mui/material";

function Login(){
    const paperStyle={
        padding: "20px",
        margin:"20px auto",
        height: "70vh",
        width: "280px"
    }
    return(
        <div>
            <Grid> 
                <Paper elevation={10} style={paperStyle}>
                    <Grid container direction="column" alignItems="center">
                        <Avatar></Avatar>
                        <h2>Sign In</h2>
                        <TextField label="username" placeholder="Enter username" fullWidth required/>
                        <TextField label="password" placeholder="Enter password" type ="password" fullWidth required/>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        <Button type="submit" color="primary" variant="contained" fullWidth required>Sign In</Button>

                    </Grid>
                    <Typography>
                            <Link href="#" >Forgot password ?</Link>
                    </Typography>
                    <Typography>
                            <Link href="#" >Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}
export default Login;