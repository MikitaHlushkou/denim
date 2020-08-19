import React from 'react';

let Headline =(props)=>{
    return(
<div className="headline-container">
    <h2 className="headline">
        {props.headline}
    </h2>
    <a className='headline-showLink' href="#">View all </a>
</div>
    )
}

export default Headline;