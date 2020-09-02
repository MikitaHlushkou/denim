import React from 'react';
import HeaderMainPage from '../Components/Header/HeaderMainPage';
import Category from '../Components/Category/Category';
import Promo from '../Components/Promo/Promo';
import Footer from '../Components/Footer/Footer';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import jeansCategory from '../assets/images/Jeans.png';
import jacketsCategory from '../assets/images/Jackets-category.png';
import shirtsCategory from '../assets/images/Shirts-category.png';
import overallsCategory from '../assets/images/Overalls-category.png';

const categoryArray = [{id:1,src: jeansCategory, type: 'Jeans'}, {id:4,
    src: shirtsCategory,
    type: 'Shirts'
}, {id:2,src: jacketsCategory, type: 'Jackets'}, {id:3,src: overallsCategory, type: 'Overalls'}]
const itemArray = [{id: 1, src: item1, type: 'Jacket', price: 120}, {id: 2, src: item2, type: 'Overalls', price: 140}, {
    id: 3,
    src: item3,
    type: 'Jacket',
    price: 90
}, {id:4,src: item4, type: 'Overalls', price: 160}];
let MainPage = () => {
    return (
        <div>
            <HeaderMainPage/>
            <main>
                <Category items={itemArray} headline={`Bestsellers`}/>
                <Promo/>
                <Category items={categoryArray} headline={`Shop by category`}/>
            </main>
            <Footer additionalClass={'mainPage'}/>
        </div>

    )
}

export default MainPage;