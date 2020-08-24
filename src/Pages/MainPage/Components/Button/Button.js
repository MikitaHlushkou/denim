import React from 'react';

const Button = (props)=>{
    return(
        <button className={`btn`} disabled><p className={`btn-text`}>{props.text}</p></button>
    )
}

export default Button;