import React from 'react';
import CollectionList from './CollectionList';
import HeaderIcons from './HeaderIcons';

let HeaderCatalogPage = () => {
    return (
        <header>
            <CollectionList/>
            <h1> Nimes</h1>
            <HeaderIcons/>
        </header>
    )
}
export default HeaderCatalogPage;