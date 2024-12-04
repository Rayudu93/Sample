import React from "react";
import './Header.css';
function Header(){
    return (
        <div className="header">
            <h1 style={{margin:"20px 40px 0 40px"}}>My Blog</h1>
                <input type="text"></input>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>SignUp</li>
                </ul>
        </div>
    )
}
export default Header;