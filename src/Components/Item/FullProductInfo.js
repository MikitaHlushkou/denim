import React from "react";
import Button from "../Button/Button";

const FullProductInfo = () => {
    return (
        <div className="product-info">
            <h2 className='product-title'>Overalls</h2>
            <p className='product-description'>Overalls in washed organic cotton denim. Collar, button fly, and
                adjustable belt at waist. Chest pockets
                with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.</p>
            <div>
                <h3 className='product-featureName'>Color</h3>
                <ul className="colorContainer">
                    <li className="colorCircle colorCircle-lightGray "/>
                    <li className="colorCircle colorCircle-darkBlue"/>
                    <li className="colorCircle colorCircle-gray"/>

                </ul>
            </div>
            <div>
                <h3 className='product-featureName'>Size</h3>
                <ul className="size">
                    <li className="size-item">XS</li>
                    <li className="size-item">S</li>
                    <li className="size-item">M</li>
                    <li className="size-item">L</li>
                    <li className="size-item">XL</li>
                </ul>
            </div>
            <div>$160</div>
            <Button text={`Add to cart`}/>
        </div>
    )
}
export default FullProductInfo;