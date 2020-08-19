import React from 'react';
import Headline from './Headline';

let Category = (props) =>{
    return(
  <div className={props.headline +'-container'}>
<Headline headline={props.headline} />

  </div>
    )
}

export  default Category;