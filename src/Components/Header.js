import React from "react";
import Button from "./Button";
const Header = ({title, onToggle}) => {
   
    return (
        <div className="header-div">
            <h2 style={{fontFamily : "'Roboto', sans-serif"}}>{ title}</h2>
            <Button text="ADD" onToggle ={onToggle} />
        </div>
    )
}

Header.defaultProps = {
    title: "Task List"
}

export default Header;   
