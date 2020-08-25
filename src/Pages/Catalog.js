import React from 'react';
import Footer from '../Components/Footer/Footer';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import jeansCategory from '../assets/images/Jeans.png';
import jacketsCategory from '../assets/images/Jackets-category.png';
import shirtsCategory from '../assets/images/Shirts-category.png';
import overallsCategory from '../assets/images/Overalls-category.png';
import HeaderCatalogPage from '../Components/Header/HeaderCatalogPage';
import CatalogDescription from '../Components/Header/CatalogDescription';
import Filter from '../Components/Filter/Filter';
import ItemsCollection from '../Components/Item/ItemsCollection';
import NumberOfItems from '../Components/Item/NumberOfItems';

const categoryArray = [{src: jeansCategory, type: 'Jeans'}, {
    src: shirtsCategory,
    type: 'Shirts'
}, {src: jacketsCategory, type: 'Jackets'}, {src: overallsCategory, type: 'Overalls'}]
const itemArray = [{src: item1, type: 'Jacket', price: 120}, {src: item2, type: 'Overalls', price: 140}, {
    src: item3,
    type: 'Jacket',
    price: 90
}, {src: item4, type: 'Overalls', price: 160}];

let Catalog = () => {
    return (
        <div>
            <HeaderCatalogPage/>
            <CatalogDescription/>
            <main>
                <Filter/>
                <ItemsCollection items={itemArray}/>
                <NumberOfItems/>
            </main>
            <Footer/>
        </div>

    )
}

export default Catalog;