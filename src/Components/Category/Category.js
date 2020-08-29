import React from 'react';
import Headline from './Headline';
import ItemsCollection from '../Item/ItemsCollection';
import MainPage from '../Item/styles.module.scss'

let Category = ({items,headline}) =>{
    return(
  <section className="category">
<Headline headline={headline} />
<ItemsCollection styles={MainPage} items={items}/>
  </section>
    )
}

export  default Category;