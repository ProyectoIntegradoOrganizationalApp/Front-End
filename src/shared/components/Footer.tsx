import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <div className='nav'>
            <div className='logo'>
                
            </div>
            <div className='routes'>
                <Link to={"/"}>Home</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/profile"}>Profile</Link>
            </div>
        </div>
    );
}