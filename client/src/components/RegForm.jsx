import React from 'react';
import RegNav from './RegNav';
import RegSignup from './RegSignup';
import RegFooter from './RegFooter';

function RegForm(){
    return (
        <>
        <div class="reg_form">
            <RegNav/>
            <RegSignup/>
            <RegFooter/>

        </div>
        </>
    )
}

export default RegForm;