import React, { useContext } from 'react';
import { useState } from 'react';
import {OrderContext} from './providers/OutorderProvider';
import Data from './data/data.json';

interface sizeprops{
    str:string,
    jap:string,
    shift:()=>void
}

interface sizesprops{
    shift:()=>void
}

const Size:React.FC<sizeprops> = (props:sizeprops)=>{
    const {outorder,setOrder} = useContext(OrderContext);
    const clk = (newsize:string)=>{
        setOrder({
            menu:outorder.menu,
            topping:outorder.topping,
            size:newsize
        });
        props.shift();
    }

    return(
        <div>
            <p onClick={()=>clk(props.str)}>
                {props.jap}
            </p>
        </div>
    )
}

export const Sizes:React.FC<sizesprops> = (props:sizesprops) => {
    const sizes = Data.size;
    return (
        <div>
            <h3>サイズ</h3>
            {sizes.map((item,key)=>
                <Size
                key={key}
                str={item.str}
                jap={item.jap}
                shift={props.shift}
                />
            )}
        </div>
    );
}