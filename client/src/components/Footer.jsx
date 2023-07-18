import React from 'react';

function Footer(){
    return(
        <>
            <div class="main_footer">
                <div class="footer">
                    <h3>Questions?Call <a href="tel:+xxx">000-000-000-000</a></h3>
                    <div class="footer_points">
                        <a href="#">Home</a>
                        <a href="#">Help Centre</a>
                        <a href="#">Account</a>
                        <a href="#">Media Centrer</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Jobs</a>
                        <a href="#">Ways To Watch</a>
                        <a href="#">Terms Of Use</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie Prefferences</a> 
                        <a href="#">Corporate Information</a>                          
                        <a href="#">Contact Us</a>
                        <a href="#">Speed Test</a>
                        <a href="#">Legal Notices</a>
                        <a href="#">Only On Netflix</a>
                    </div>
                    <div className="select_container language">
                      <img className="www_image" src="images/www.png" alt="www_logo" />
                      <select className="select">
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      </select>
                      <img className="select_arrow" src="images/down arrow.png" alt="down_arrow"/>
             
                    </div>
                    <p>Netflix clone by Shiraz</p>
                </div>
            </div>
        </>
    )
}

export default Footer;