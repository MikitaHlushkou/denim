import React from 'react';
import ItemCard from './ItemCard';

const ItemsCollection =({items})=>{
    const mapedItemCard = items.map(el=><ItemCard key={el.src} src={el.src} type={el.type} price={el.price}/>)
    return(
<div className="item-collection">
    {mapedItemCard}
</div>
    )
}

export default ItemsCollection;