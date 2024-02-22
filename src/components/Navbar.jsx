import React from "react"

export default function Navbar(props){
    return(
        <nav>
            <img src={props.bjjLogo} className="nav--icon" width="50px"/>
            <h3 className="nav--logo_text">BJJ</h3>
            <h4 className="nav--slogan">Keep Rolling</h4>
        </nav>
    )
} 