import React from 'react';
import Headline from './Headline';
import ItemsCollection from '../Item/ItemsCollection';

let Category = ({items,headline}) =>{
    return(
  <section className="category">
<Headline headline={headline} />
<ItemsCollection items={items}/>
  </section>
    )
}

export  default Category;