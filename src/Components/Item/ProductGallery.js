import React from "react";

const ProductGallery = ({state}) => {
    let Product = state.picList.map((el,i) => <img className='product-image' src={el} key={state.picList[i]} alt={`product`}/>)
    return (
        <div className={`product-gallery`}>
            {Product}
        </div>
    )

}

export default ProductGallery