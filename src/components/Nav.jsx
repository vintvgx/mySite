import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

    const right = {
        textAlign: "right",
        position: "absolute",
        top: "15%",
        right: "2%",
        textDecoration: "none"
    }


    return (
        <div style={right} className="navig">
            <a href="https://www.freecodecamp.org/"><h4>studio</h4><br/></a>
            <Link to="/Studio">studio</Link> 
            <a href="www.google.com"><h4>about the studio</h4></a>
            <a href="www.google.com"><h4>contact</h4></a>
        </div>
    );
}

export default Nav;

