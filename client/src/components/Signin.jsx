import React from 'react';
import SigninNav from './SigninNav';
import SigninMain from './SigninMain';
import SigninFooter from './SigninFooter';

function Signin(){
    return(
        <>
            <div className="signin">
              <SigninNav/>
              <SigninMain/>
              <SigninFooter/>
            </div>
        </>
    )
}

export default Signin;