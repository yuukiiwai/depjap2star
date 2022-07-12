import React, { useContext } from 'react';
import { useState } from 'react';

import {OrderContext} from './providers/OutorderProvider';

export const Last:React.FC = () => {
    const {outorder} = useContext(OrderContext);
    return (
        <div>
            <h1>Result!</h1>
            <div className='order'>
                <p>{outorder.menu}</p>
                <p>{outorder.topping}</p>
                <p>{outorder.size}</p>
            </div>
        </div>
    );
}