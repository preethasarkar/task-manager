import React from "react";
import { Avatar } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

function Header(){
    return (
        <header>
            <Avatar className="icon" variant="rounded">
                <AssignmentIcon />
            </Avatar>
            <h1> Notion 2.0 </h1>
        </header>
    )
}

export default Header;