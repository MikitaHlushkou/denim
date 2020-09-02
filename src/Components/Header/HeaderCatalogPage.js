import React from 'react';
import CollectionList from './CollectionList';
import HeaderIcons from './HeaderIcons';
import catalogStyles from './catalogStyles.module.scss';
import {Link} from "react-router-dom";

let HeaderCatalogPage = () => {
    return (
        <header className={catalogStyles.secondaryHeader}>
            <CollectionList style={catalogStyles} />
            <Link to={`/`}><h1> Nimes</h1></Link>
            <HeaderIcons style={catalogStyles}/>
        </header>
    )
}
export default HeaderCatalogPage;