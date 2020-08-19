import React from 'react';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import ItemsCollection from './Components/Item/ItemsCollection';
import Promo from './Components/Promo';
import Footer from './Components/Footer/Footer';

let MainPage = ()=>{
    return(
<div>
    <Header/>

<main>
    <Category headline={`Bestsellers`}/>
    <ItemsCollection/>
    <Promo/>
    <Category headline={`Shop by category`}/>
</main>
    <Footer/>
</div>

    )
}

export default MainPage;