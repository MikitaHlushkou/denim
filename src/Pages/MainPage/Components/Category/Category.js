import React from 'react';
import Headline from './Headline';
import ItemsCollection from '../Item/ItemsCollection';

let Category = ({items,headline}) =>{
    return(
  <div className={headline +'-container'}>
<Headline headline={headline} />
<ItemsCollection items={items}/>
  </div>
    )
}

export  default Category;