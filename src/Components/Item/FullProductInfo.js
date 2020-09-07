import React from "react";
import Button from "../Button/Button";

const FullProductInfo = ({state}) => {
  let  {price, category,sizes} = state;
       const size =sizes.map((el,i)=> <li key={i} className="size-item">{el}</li>)
    return (
        <div className="product-info">
            <h2 className='product-title'>{state.category}</h2>
            <p className='product-description'>{category} in washed organic cotton denim. Collar, button fly, and
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
                    {size}
                </ul>
            </div>
            <div className='product-price'>$ {price}</div>
            <Button additionalClass={`addToCart`} text={`Add to cart`}/>
        </div>
    )
}
export default FullProductInfo;