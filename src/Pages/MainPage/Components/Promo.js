import React from 'react';
import Button from './Button/Button';

const Promo = ()=>{
    return(
       <div className="promo">
           <img src="" alt=""/>
           <div className='promo-container'>
               <div className='promo-card'>
                   <p>fall 2019</p>
                  <Button text={`Shop now`} />
               </div>
           </div>
       </div>
    )
}

export default Promo;