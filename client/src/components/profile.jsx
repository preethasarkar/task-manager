import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile(){
    return (
        <div style={{marginLeft: "8px"}}>
            <button className="profile" type="button">
            <AccountCircleIcon />
            </button>
        </div>
    );
}

export default Profile;