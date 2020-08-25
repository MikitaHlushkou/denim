import React from 'react';

let Headline =({headline})=>{
    return(
<div className="category-container">
    <h2 className="category-headline">
        {headline}
    </h2>
    <a className='category-showLink' href="#">View all </a>
</div>
    )
}

export default Headline;