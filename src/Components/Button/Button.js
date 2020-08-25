import React, {Fragment} from 'react';

const Button = ({text, additionalClass}) => {
    return (
        <Fragment>  {additionalClass ?
            <button className={`btn btn-${additionalClass}`} disabled><p className={`btn-text`}>{text}</p></button> :
            <button className={`btn`} disabled><p className={`btn-text`}>{text}</p>
            </button>}</Fragment>


    )
}

export default Button;