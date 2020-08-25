import React from 'react';
import Logo from '../../assets/images/HeaderDescription2.jpg';
let CatalogDescription =()=>{
    return(
        <div className='headerDescription headerDescription-container'>
        <div className='headerDescription-item'>
            <ul className="breadcrumbs">
                <li className="breadcrumbs-item">All Categrories</li>
                <li className="breadcrumbs-item"> Woman</li>
                <li className="breadcrumbs-item">Jackets</li>
            </ul>
            <p>Denim Collection<br/>Fall 2019</p>
        </div>
            <div className="headerDescription-item">
                <img src={Logo} alt=""/>
            </div>s
        </div>
    )
}
export default CatalogDescription