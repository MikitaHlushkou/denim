import React, {useEffect, useState} from 'react';
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

const catalogArray = [{src: catalog1, type: 'Jacket', price: 40, collection: 'casual', color: 'red'}, {
    src: catalog2,
    type: 'Jacket',
    price: 70,
    collection: 'casual',
    color: 'red'
}, {src: catalog3, type: 'Jacket', price: 60}, {src: catalog4, type: 'Jacket', price: 50}, {
    src: catalog5,
    type: 'Jacket',
    price: 40,
    collection: 'petite',
    color: 'red'
}, {src: catalog6, type: 'Jacket', price: 110}, {src: catalog7, type: 'Jacket', price: 35}, {
    src: catalog8,
    type: 'Jacket',
    price: 85, collection: 'classic', color: 'green'
}, {src: catalog9, type: 'Jacket', price: 160, collection: 'casual',color: 'red'}]

let Catalog = () => {
    const [catalogItems, setCatalogItems] = useState(catalogArray);
    const [filterParams, setfilterParams] = useState({});
    const onFilter = (parameter, value) => {
        let Filtered = catalogItems.filter(el => el[parameter] === value);
        setCatalogItems(Filtered);
    }
    const FilterObj = (param,value) => {
        let prev = {...filterParams};
        prev[param]=value
        setfilterParams( prev);
        let {type, collection, color} = filterParams;
        let Filtered = catalogArray.filter(el => {
            if (color && type && collection) {
                console.log(`все фильтры`)
                return el.color === color && el.type === type && el.collection === collection;
            } else if (color && type === undefined && collection == undefined) {
                console.log(`${filterParams.color} только цвет ${color}`)
                return el.color === color;
            } else if (color&&collection){
                console.log(`цвет и коллекция `)
                return el.color === color&& el.collection===collection;
            }
        })
        setCatalogItems(Filtered)
    }
useEffect(()=> {
    let a = Object.keys(filterParams);
    let cl = filterParams[a[1]];
    console.log(`${a} и ${filterParams[a[1]]} и проба объекта ${filterParams.collection} ` )}, [filterParams]

)

    return (
        <div>
            <HeaderCatalogPage/>
            <CatalogDescription/>
            <main>
                <Filter items={catalogItems} set={setfilterParams} filter={FilterObj} onfilter={onFilter}/>
                <ItemsCollection styles={CatalogStyles} items={catalogItems}/>
                <NumberOfItems number={catalogItems.length} styles={CatalogStyles}/>
            </main>
            <Footer additionalClass={`catalogPage`}/>
        </div>

    )
}
export default Catalog;