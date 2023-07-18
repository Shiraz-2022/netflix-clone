import React from 'react';
import {useNavigate} from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();
    
    function handleClick(){

        navigate('/signin');
    }

    function changeLanguage(){
       var language = document.getElementById('select');
       var changingText = document.getElementById("text");

       if(language.value === "hindi"){
        changingText.innerHTML="असीमित फिल्में, टीवी शो और बहुत कुछ"
       }
       else{
        changingText.innerHTML="Unlimited movies, TV shows and more"
       }
    }   


    return(
        <div className="navbar" >
            <img className="logo_img" src="images/logo.png" alt="logo"/>
            <div className="select_container">
                <img className="www_image" src="images/www.png" alt="www_logo" />
                <select id="select" className="select" onChange={changeLanguage}>
                  <option id="select_options" value="english">English</option>
                  <option id="select_options" value="hindi">Hindi</option>
                </select>
                <img className="select_arrow" src="images/down arrow.png" alt="down_arrow"/>
             
            </div>
            <button onClick={handleClick}>Sign In</button>
        </div>
    )
}

export default Navbar;