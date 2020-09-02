import React from 'react';
import Footer from '../Components/Footer/Footer';
import catalog1 from '../assets/images/1catalog.png';
import catalog2 from '../assets/images/2catalog.png';
import catalog3 from '../assets/images/3catalog.png';
import catalog4 from '../assets/images/4catalog.png';
import catalog5 from '../assets/images/5catalog.png';
import catalog6 from '../assets/images/6catalog.png';
import catalog7 from '../assets/images/7catalog.png';
import catalog8 from '../assets/images/8catalog.png';
import catalog9 from '../assets/images/9catalog.png';
import HeaderCatalogPage from '../Components/Header/HeaderCatalogPage';
import CatalogDescription from '../Components/Header/CatalogDescription';
import Filter from '../Components/Filter/Filter';
import ItemsCollection from '../Components/Item/ItemsCollection';
import NumberOfItems from '../Components/Item/NumberOfItems';
import CatalogStyles from '../Components/Item/Catalog.module.scss'

const catalogArray = [{src: catalog1, type: 'Jacket', price: 40}, {
    src: catalog2,
    type: 'Jacket',
    price: 70
}, {src: catalog3, type: 'Jacket', price: 60}, {src: catalog4, type: 'Jacket', price: 50}, {
    src: catalog5,
    type: 'Jacket',
    price: 40
}, {src: catalog6, type: 'Jacket', price: 110}, {src: catalog7, type: 'Jacket', price: 35}, {
    src: catalog8,
    type: 'Jacket',
    price: 85
}, {src: catalog9, type: 'Jacket', price: 160}]

let Catalog = () => {
    return (
        <div>
            <HeaderCatalogPage/>
            <CatalogDescription/>
            <main>
                <Filter />
                <ItemsCollection styles={CatalogStyles} items={catalogArray}/>
                <NumberOfItems styles={CatalogStyles}/>
            </main>
            <Footer additionalClass={`catalogPage`}/>
        </div>

    )
}

export default Catalog;