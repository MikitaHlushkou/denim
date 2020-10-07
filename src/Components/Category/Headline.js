import React from 'react';
import {Link} from "react-router-dom";

let Headline =({headline})=>{
    return(
<div className="category-container">
    <h2 className="category-headline">
        {headline}
    </h2>
    <Link to={'/catalog'}  className='category-showLink' href="#">View all </Link>
</div>
    )
}

export default Headline;