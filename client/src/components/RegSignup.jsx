import React from 'react';

function RegSignup(){
    return(
        <>
            <div className="reg_signup">
                <form action='/submit' method="POST">
                <div className="reg_signup_inner">
                    <h1>Create a password to start your membership</h1>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder='Add a password'/>
                    <button type="submit">Sign Up</button>
                </div>
                </form>
                

            </div>
        </>
    )
}

export default RegSignup;