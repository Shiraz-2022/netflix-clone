import React from 'react';
import Navbar from './Navbar';
import Signup from './Signup';

function Main(){
    return (
        <div>
        <div className="main_page">
        
            <Navbar/> 
            <Signup />
        </div>    
        <div class="line"></div>
        </div>
    )
}

export default Main;