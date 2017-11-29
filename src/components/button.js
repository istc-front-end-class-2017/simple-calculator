import React from 'react';

const Button = ({val, clickHandler}) => (
    <button onClick={clickHandler}>{val}</button>
);

export default Button;