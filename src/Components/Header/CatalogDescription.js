import React from 'react';
import Logo from '../../assets/images/HeaderDescription2.jpg';
import catalogStyles from './catalogStyles.module.scss';
let CatalogDescription =()=>{
    return(
        <div className={catalogStyles['headerDescription']}>
        <div className={catalogStyles['headerDescription-item']}>
            <ul className={catalogStyles.breadcrumbs}>
                <li className={catalogStyles['breadcrumbs-item']}>All Categrories</li>
                <li className={catalogStyles['breadcrumbs-item']}> Woman</li>
                <li className={catalogStyles['breadcrumbs-item']}>Jackets</li>
            </ul>
            <p className={catalogStyles['collection-description']}>Denim Collection<br/>Fall 2019</p>
        </div>
            <div className={catalogStyles['headerDescription-item']}>
                <img className={catalogStyles['headerDescription-image']} src={Logo} alt=""/>
            </div>
        </div>
    )
}
export default CatalogDescription