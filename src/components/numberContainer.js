import React from 'react';
import Button from './button';
import {range} from 'lodash';

const NumPad = ({clickHandler}) => {

    const content = [...range(1,10), 0].map(number => (
        <div key={number} style={{display: 'inline'}}>
            <Button clickHandler={clickHandler} val={number} />
            { number % 3 === 0 ? <br /> : null }
        </div>
    ));

    return content;
}

export default NumPad;