import React, { useContext } from 'react';
import { Card } from './Card';
import {OrderContext, step} from './providers/OutorderProvider';

interface menusprops{
    kind:string,
    menus:string[],
    shift:()=>void,
}

interface menuprops{
    menu:string,
    shift:()=>void
}

const Menu:React.FC<menuprops> = (props:menuprops) =>{
    const {outorder,setOrder,steps,setSteps} = useContext(OrderContext);
    const clk = (newmenu:string)=>{
        // パンくずの処理
        let tmpstep:Array<step> = steps;
        const newstep:step = {step:"メニュー",value:newmenu}
        tmpstep.push(newstep);
        setSteps(tmpstep);

        // オーダーの処理
        setOrder({
            menu:newmenu,
            size:outorder.size,
            topping:outorder.topping
        });
        props.shift();
    }
    return(
        <Card
        clk={()=>{clk(props.menu)}}
        imgurl=""
        text={props.menu}/>
    );
}

const Menus:React.FC<menusprops> = (props:menusprops) => {

    return (
        <div>
            <h3>{"> "}{props.kind}のメニュー</h3>
            {props.menus.map((item,key)=>
                <Menu key={key} menu={item} shift={props.shift}/>
            )}
        </div>
    );
}

export default Menus;