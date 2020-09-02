import React from 'react';
import HeaderPromotion from './HeaderPromotion';
import {Link} from "react-router-dom";

let HeaderMainPage = () => {
    return (
        <header>
            <Link to={`/`}><h1> Nimes</h1></Link>
            <HeaderPromotion/>
        </header>
    )
}
export default HeaderMainPage;