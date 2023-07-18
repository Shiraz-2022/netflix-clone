import React from 'react';
import Main from './Main_page';
import Tv from './Tv_page';
import Phone from './Phone_page';
import Devices from './Devices_page';
import Kids from './Kids_page';
import Faq from './Faq';
import Footer from './Footer';


function Home() {
  
  return (
    <div>
      <Main />
      <Tv />
      <div class="line"></div>
      <Phone />
      <div class="line"></div>
      <Devices />
      <div class="line"></div>
      <Kids />
      <div class="line"></div>
      <Faq />  
      <div class="line"></div>
      <Footer />
    </div>
  );
}

export default Home;
