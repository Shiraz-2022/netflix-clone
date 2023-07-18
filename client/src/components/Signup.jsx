import React from 'react';
import {useNavigate} from 'react-router-dom';

function Signup(){

  const navigate = useNavigate();

  function handleClick(){
    navigate('/RegForm');
  }

    return(
        <div className="signup">
          <div className="signupInner">
            <h1 id="text">Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere.Cancel anytime</p>
            <h3>Ready to watch? Enter your email to create orrestart your membership.</h3>
            <form>
            <div className="email_container">
                <input type="email" placeholder="Email address" />
                <button type="submit" onClick={handleClick} >Get started <img src="images/right arrow.png" alt="arrow_img" /></button>
            </div>
            </form>
          </div>
        </div>
    )
}

export default Signup;