import React, { useContext } from 'react';
import { Card } from './Card';
import {OrderContext} from './providers/OutorderProvider';

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
    const {outorder,setOrder} = useContext(OrderContext);
    const clk = (newmenu:string)=>{
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