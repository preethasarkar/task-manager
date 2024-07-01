import React from "react";

let currdate=new Date().getFullYear();

function Footer(){
    return (
        <footer className="footer-paragraph">Copyright @ {currdate} </footer>
    )    
}

export default Footer;