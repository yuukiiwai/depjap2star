import React from 'react';
import { useState } from 'react';
import {Last} from './Last';
import { OutorderProvider } from './providers/OutorderProvider';
import Kinds from './Kind';

interface testProps{
    com:string,
};

export const Test:React.FC<testProps> = (props:testProps) =>{
    return(
        <div>
            <p>test</p>
            <p>{props.com}</p>
        </div>
    )
}

const App:React.FC = () => {
    const [elarr, setElarr] = useState<Array<any>>(Array<any>);
    const [dispel,setDisp] = useState<any>(<Kinds 
        push={(e)=>{pushEl(e)}}
        shift={()=>{shiftEl()}}
        pop={()=>{popEl()}}
        />);

    const pushEl = (els:Array<any>)=>{
        let tmp = elarr;
        for(let i = 0;i < els.length;i++){
            tmp.push(els[i]);
        }
        setElarr(tmp);
    }
    const shiftEl = () =>{
        let tmp = elarr;
        let el:React.FC|Element|undefined;
        el = tmp.shift();
        if(typeof el === 'undefined'){
            setDisp(<Last />);
        }else{
            setDisp(el);
        }
        setElarr(tmp);
    }
    const popEl = () =>{
        let tmp = elarr;
        let el:React.FC|Element|undefined;
        el = tmp.pop();
        if(typeof el === 'undefined'){
            setDisp(<Last />);
        }else{
            setDisp(el);
        }
        setElarr(tmp);
    }

    return (
        <div className='main'>
            <OutorderProvider>
                {dispel}
            </OutorderProvider>
        </div>
    );
}

export default App;
