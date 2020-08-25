import React from 'react';
import Button from '../Button/Button';
import promoImage from '../../assets/images/promo.png';

const Promo = ()=>{
    return(
       <div className="promo">
           <img className={`promo-image`} src={promoImage} alt=""/>
           <div className='promo-container'>
               <div className='promo-card'>
                   <p className={`promo-description`}>Street fashion collection <br/> <span>Fall 2019</span> </p>
                  <Button additionalClass={`promo`} text={`Shop now`} />
               </div>
           </div>
       </div>
    )
}

export default Promo;