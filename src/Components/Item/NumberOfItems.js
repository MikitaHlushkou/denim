import React from 'react';
import Button from '../Button/Button';

let NumberOfItems=({styles})=>{
    return(
        <div>
            <div className={styles.results}> Showing 9 of 45 items</div>
            <Button additionalClass={'loadMore'} text={`Load more`} />
        </div>
    )
}
export default NumberOfItems;
