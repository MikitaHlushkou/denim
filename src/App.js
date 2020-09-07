import React from 'react';

import MainPage from './Pages/MainPage';
import Catalog from './Pages/Catalog';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductCard from "./Pages/ProductCard";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <div className="App">
                <Route exact path='/' component={MainPage}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/product/:id?' component={ProductCard}/>
            </div>
        </Router>
    );
}

export default App;
