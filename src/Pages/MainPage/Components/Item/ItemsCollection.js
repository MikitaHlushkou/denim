import React from 'react';
import ItemCard from './ItemCard';
import item1 from '../../../../assets/images/item1.png';
import item2 from '../../../../assets/images/item2.png';
import item3 from '../../../../assets/images/item3.png';
import item4 from '../../../../assets/images/item4.png';

const itemArray = [{src:item1,type:'Jacket',price:120}, {src:item2,type:'Overalls',price:140}, {src:item3,type:'Jacket',price:90}, {src:item4,type:'Overalls',price:160}];
const ItemsCollection =()=>{
    const mapedItemCard = itemArray.map(el=><ItemCard src={el.src} type={el.type} price={el.price}/>)
    return(
<div className="item-collection">
    {mapedItemCard}
</div>
    )
}

export default ItemsCollection;