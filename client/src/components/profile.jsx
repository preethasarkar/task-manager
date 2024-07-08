import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile(){
    return (
        <div>
            <button className="profile" type="button">
            <AccountCircleIcon />
            </button>
        </div>
    );
}

export default Profile;