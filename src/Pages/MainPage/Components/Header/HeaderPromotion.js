import React from 'react';
import Button from '../Button/Button';
import Logo from '../../../../assets/images/matheus-Header.png';

let HeaderPromotion =()=>{
    return(
        <div className="grid-сontainer">
            <div className="grid-item">
                <ul className="category">
                    <li className="category-item">Woman</li>
                    <li className="category-item">Man</li>
                    <li className="category-item">New</li>
                </ul>
            </div>
            <div className="grid-item">
                <p>The quality you deserve</p>
                <h2>denim</h2>
             <Button text={`Check new collection`} />
            </div>
            <div className="grid-item"><img src={Logo} width={`413px`} height={`517px`} alt="" /></div>

            <div className="grid-item">
                <div className="top-icons">
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
                <div className="header-socials">
                    <ul className="socialsList">
                        <li className="socialList-item">Facebook</li>
                        <li className="socialList-item">Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export  default HeaderPromotion;