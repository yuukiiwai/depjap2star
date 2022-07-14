import React, { useContext } from 'react';
import { Card } from './Card';
import {OrderContext,step} from './providers/OutorderProvider';

interface toppingsprops{
    kind:string,
    toppings:topping[],
    push:(e:Array<any>)=>void,
    pop:()=>void,
}

export interface topping{
    parent:jap2stardic,
    childlen:topping[]
}

interface jap2stardic{
    str:string,
    jap:string
}

interface toppingprops{
    kind:string,
    topping:jap2stardic,
    childlen:topping[],
    push:(e:Array<any>)=>void,
    pop:()=>void
}

const Topping:React.FC<toppingprops> = (props:toppingprops) =>{
    const {outorder,setOrder,steps,setSteps} = useContext(OrderContext);
    const clk = (childlen:topping[])=>{
        // パンくずの処理
        let tmpstep:Array<step> = steps;
        const newstep:step = {step:"カスタマイズ",value:props.topping.jap}
        tmpstep.push(newstep);
        setSteps(tmpstep);

        // オーダーの処理
        setOrder({
            menu:outorder.menu,
            size:outorder.size,
            topping:outorder.topping +" "+ props.topping.str
        });
        if(childlen.length !== 0){
            props.push(
                [<Toppings
                kind={props.kind}
                pop={props.pop}
                push={props.push}
                toppings={props.childlen}
                />]
            );
        }
        props.pop();
    }
    return(
        <Card
        clk={()=>{clk(props.childlen);}}
        imgurl=""
        text={props.topping.jap}/>
    );
}

const Toppings:React.FC<toppingsprops> = (props:toppingsprops) => {

    return (
        <div>
            <h3>{"> "}{props.kind}のカスタマイズ</h3>
            {props.toppings.map((item,key)=>
                <Topping 
                key={key} 
                kind = {props.kind}
                topping={item.parent} 
                pop={props.pop} 
                push={props.push}
                childlen={item.childlen}/>
            )}
        </div>
    );
}

export default Toppings;