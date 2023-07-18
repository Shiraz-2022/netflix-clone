import React from 'react';

function Tv(){


    return(
        <div className="tv">
          <div className="main_tv">
            <div className="tv_text">
              <h1>Enjoy on your TV</h1>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="tv_image">
            <div  className="tv_vedio" >
            <video width="100%" height="100%" muted autoPlay loop>
              <source src="images/mov_bbb.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            </div>
                <img src="images/tv.png" alt="tv_image" />
            </div>
          </div>
        </div>
        
    )

  
    
}

export default Tv;