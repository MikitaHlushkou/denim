import React from 'react';
import CollectionList from './CollectionList';
import HeaderIcons from './HeaderIcons';
import catalogStyles from './catalogStyles.module.scss';

let HeaderCatalogPage = () => {
    return (
        <header className={catalogStyles.secondaryHeader}>
            <CollectionList style={catalogStyles} />
            <h1> Nimes</h1>
            <HeaderIcons style={catalogStyles}/>
        </header>
    )
}
export default HeaderCatalogPage;