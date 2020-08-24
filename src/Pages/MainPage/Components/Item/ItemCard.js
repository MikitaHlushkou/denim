import React from 'react';

let ItemCard =(props)=>{
    return(
        <div className={`item-card`}>
        <a href="#">
            <div>
                <img className={`item-image`} src={props.src} alt=""/>
            </div>
        </a>
            <div className={`item-label`}><p>{props.type}</p>
            <span>$ {props.price}</span>
            </div>
        </div>
    )
}

export default ItemCard;