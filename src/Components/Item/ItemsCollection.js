import React from 'react';
import ItemCard from './ItemCard';

const ItemsCollection =({items,styles})=>{
    const mapedItemCard = items.map(el=><ItemCard styles={styles} key={el.src} src={el.src} type={el.type} price={el.price}/>)
    return(
<div className={styles['item-collection']}>
    {mapedItemCard}
</div>
    )
}

export default ItemsCollection;