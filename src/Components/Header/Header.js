import React, { Component } from 'react';

import {Link} from "react-router-dom"

class Header extends Component {
    render(){
        return (

            <div className="nav-bar">
                <ul id='myNav'>
                    
                    <li>
                        <Link to="/starwars">Get (Star Wars)</Link>
                    </li>   
                    <li>
                        <Link to="/register">Register</Link>
                    </li>                             
                    <li>
                        <Link to="/display-users">Display</Link>
                    </li>   
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header