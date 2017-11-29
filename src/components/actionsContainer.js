import React from 'react';
import Button from './button';

const ActionsContainer = ({clearClickHandler, equalClickHandler}) => {
    return (
        <div>
            <Button val='=' clickHandler={equalClickHandler}/>
            <Button val='C' clickHandler={clearClickHandler} />
        </div>
    );
};

export default ActionsContainer;