import React from 'react';

let ItemCard =({src,type,price})=>{
    return(
        <div className={`item-card`}>
        <a href="#">
            <div>
                <img className={`item-image`} src={src} alt=""/>
            </div>
        </a>

            <div className={`item-label`}><p>{type}</p>
                {price?<span>$ {price}</span>:null}

            </div>
        </div>
    )
}

export default ItemCard;