import React from 'react';

function SigninMain(){
    return(
        <>
            <div className="signin_main">
                <form action='/movies' method="POST">
                <div className="signin_inner">
                    <h1>Sign In</h1>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder='Password'/>
                    <p className="hidden">password is incorrect</p>
                    <button type="submit">Sign In</button>
                    <p>New to Netflix ? <a href="/RegForm">Sign up now</a></p>
                </div>
                </form>
                

            </div>
        </>
    )
}

export default SigninMain;