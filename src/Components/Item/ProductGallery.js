import React from "react";

const ProductGallery = ({state}) => {
    let {images} = state;
    let Product = images.map((el, i) => <img className='product-image' src={el} key={state[i]}
                                             alt={`product`}/>)
    return (
        <div className={`product-gallery`}>
            {Product}
        </div>
    )

}

export default ProductGallery