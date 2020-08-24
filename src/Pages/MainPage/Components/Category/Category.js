import React from 'react';
import Headline from './Headline';
import ItemsCollection from '../Item/ItemsCollection';

let Category = (props) =>{
    return(
  <div className={props.headline +'-container'}>
<Headline headline={props.headline} />
<ItemsCollection/>
  </div>
    )
}

export  default Category;