import React from "react";
import {Test} from "./App";
import Menus from "./Menu";
import { Sizes } from "./Size";
import Toppings,{topping} from "./Topping";
import Data from './data/data.json';

export interface kindprops{
    push:(e:Array<any>)=>void,
    shift:()=>void,
    pop:()=>void
}

const Kind:React.FC<kindprops> = (props:kindprops) =>{
    const coffeMenu = Data.menu.cof;
    const flpMenu = Data.menu.flp;
    const espressoMenu = Data.menu.esp
    const flpTopping:topping[] = Data.topping.flp;
    return(
        <div>
            <h3>{">"} 種類</h3>
            <p onClick={()=>{
                props.push([
                    <Menus
                    kind="フラペチーノ"
                    menus={flpMenu}
                    shift={props.shift} />,
                    <Toppings
                    kind="フラペチーノ"
                    pop={props.pop}
                    push={props.push}
                    toppings={flpTopping}
                    />,
                    <Sizes
                    shift={props.shift}
                    />
                ]);
                props.shift();
            }}>フラペチーノ</p>
            <p onClick={()=>{
                props.push([
                    <Menus
                    kind="コーヒー"
                    menus={coffeMenu}
                    shift={props.shift} />,
                    <Sizes
                    shift={props.shift}
                    />
                ]);
                props.shift();
            }}>コーヒー</p>
            <p onClick={()=>{
                props.push([
                    <Menus
                    kind="エスプレッソ"
                    menus={espressoMenu}
                    shift={props.shift}
                    />,
                    <Sizes
                    shift={props.shift}
                    />
                ]);
                props.shift();
            }}
            >エスプレッソ</p>
        </div>
    );
}

export default Kind;