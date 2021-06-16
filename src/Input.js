import React from 'react';

import './Input.css';

const Input = ({ value, placeholder, title, ...restProps }) => {
    return (
        <div className="input">
            <label>{title}</label>
            <input value={value} placeholder={placeholder} {...restProps} />
        </div>
    );
};

export default Input;
