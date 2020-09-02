import React from 'react';

import MainPage from './Pages/MainPage';
import Catalog from './Pages/Catalog';
import {BrowserRouter, Route} from "react-router-dom";
import ProductCard from "./Pages/ProductCard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path='/main' component={MainPage}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/product/:id?' component={ProductCard}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
