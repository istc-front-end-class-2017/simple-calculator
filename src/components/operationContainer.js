import React from 'react';
import Button from './button';

const OperationContainer = ({clickHandler}) => {
    const content = ['+', '-', '/', '*'].map(o => (
        <Button val={o} key={o} clickHandler={clickHandler} />
    ));
    return (
        <div>
            {content}
        </div>
    );
};

export default OperationContainer;