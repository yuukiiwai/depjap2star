import React from "react";
import Menus from "./Menu";
import { Sizes } from "./Size";
import Toppings,{topping} from "./Topping";
import './css/style.css';
import Data from './data/data.json';

export interface kindsprops{
    push:(e:Array<any>)=>void,
    shift:()=>void,
    pop:()=>void
}

interface kindprops{
    kind:string,
    ads:Array<any>,
    push:(e:Array<any>)=>void,
    shift:()=>void,
    pop:()=>void
}

const Kind:React.FC<kindprops> = (props:kindprops)=>{
    const clk=()=>{
        props.push(props.ads);
        props.shift();
    }
    return(
        <div className="flex" onClick={()=>{clk()}}>
            <figure className="listimage">
                <img src="https://picsum.photos/id/237/960/540" alt="temp"/>
                <p className="listtext">{props.kind}</p>
            </figure>
        </div>
    );
}

const Kinds:React.FC<kindsprops> = (props:kindsprops) =>{
    const coffeMenu = Data.menu.cof;
    const flpMenu = Data.menu.flp;
    const espressoMenu = Data.menu.esp
    const flpTopping:topping[] = Data.topping.flp;
    return(
        <div>
            <h3>{">"} 種類</h3>
            <Kind
            ads={[
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
            ]}
            kind="フラペチーノ"
            pop={props.pop}
            shift={props.shift}
            push={props.push}
            />
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

export default Kinds;