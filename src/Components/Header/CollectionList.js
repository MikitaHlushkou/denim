import React from 'react';

let CollectionList = ({style})=>{
    return(
        <ul className={style['collection']}>
            <li className={style['collection-item']}>Woman</li>
            <li className={style['collection-item']}>Man</li>
            <li className={style['collection-item']}>New</li>
        </ul>
    )
}
export default CollectionList;