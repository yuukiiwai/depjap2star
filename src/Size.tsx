import React, { useContext } from 'react';
import { Card } from './Card';
import {OrderContext, step} from './providers/OutorderProvider';
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
    const {outorder,setOrder,steps,setSteps} = useContext(OrderContext);
    const clk = ()=>{
        // パンくず処理
        let tmpstep:Array<step> = steps;
        const newstep:step = {step:"サイズ",value:props.jap}
        tmpstep.push(newstep);
        setSteps(tmpstep);

        // オーダー処理
        setOrder({
            menu:outorder.menu,
            topping:outorder.topping,
            size:props.str
        });
        props.shift();
    }

    return(
        <Card
        clk={()=>clk()}
        imgurl=""
        text={props.jap}/>
    )
}

export const Sizes:React.FC<sizesprops> = (props:sizesprops) => {
    const sizes = Data.size;
    return (
        <div>
            <h3>{"> "}サイズ</h3>
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