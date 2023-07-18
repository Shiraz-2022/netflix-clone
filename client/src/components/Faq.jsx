import React,{useState} from 'react';
import faqData from './FaqData';


function Faq(){

   const [isClicked,setIsClicked] = useState(false);
   const [itemId,setItemId] = useState(null);

   function handleClick(id){
    setIsClicked(!isClicked)
    setItemId(id)
   }


   return(
    <>
        <div className="main_faq">
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
               { faqData.map((element) =>(
                <div className="faq_component" onClick={()=>{
                            handleClick(element.id)
                        }}>
                <span>
                        <h3>{element.title}</h3>
                
                        {(itemId === element.id && isClicked) ? <img src="images/cross.png" alt="cross_img" /> : <img src="images/plus.png" alt="plus_img" />}
                
                </span>         
                
                {(itemId === element.id && isClicked) && <div className="faq_content"><p className={`${isClicked ? "faq_clicked" : ""}`}>{element.content}</p></div>}
                
                </div>        
                ))}
            </div>
        </div>
    </>
         )
}

export default Faq;