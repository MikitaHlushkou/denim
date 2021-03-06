import React from 'react';
import {Link} from "react-router-dom";

let ItemCard = ({src, type, price, styles,id}) => {

    return (

        <div className={styles['item-card']}>
            <Link to={'/product/'+`${id}`}>
                <div>
                    <img className={`item-image`} src={src} alt=""/>
                </div>
            </Link>


            <div className={`item-label`}><p>{type}</p>
                {price ? <span>$ {price}</span> : null}

            </div>
        </div>
    )
}

export default ItemCard;