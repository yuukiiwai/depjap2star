import { createContext,useState } from "react";

export interface order{
    menu:string,
    topping:string,
    size:string,
}

export interface step{
    step:string,
    value:string
}

export interface stepsprops{
    steps:Array<step>
}

export const OrderContext = createContext<any>({});

const Steps:React.FC<stepsprops> = (props:stepsprops) =>{
    return(
        <table className="steptable">
            <thead>
                {props.steps.map((item,key)=>{
                    if(item.step === ""){
                        return(<br/>)
                    }else{
                        return(
                            <>
                            <th key={key}>&nbsp;&nbsp;{">"}&nbsp;</th>
                            <th key={key}>{item.step}</th>
                            </>
                        )
                    }
                })
                }
            </thead>
            <tbody>
                <tr>
                {props.steps.map((item,key)=>{
                    if(item.value === ""){
                        return(<br/>)
                    }else{
                        return(
                            <>
                            <th>&nbsp;&nbsp;</th>
                            <td key={key}>{item.value}</td>
                            </>
                        )
                    }
                })
                }
                </tr>
            </tbody>
        </table>
    );
}

export const OutorderProvider = (props:any)=>{
    const [outorder,setOrder] = useState<order>({menu:"",size:"",topping:""});
    const [steps,setSteps] = useState<Array<step>>([{step:"",value:""}]);
    return(
        <OrderContext.Provider value={{outorder,setOrder,steps,setSteps}}>
            <Steps
                steps={steps}
            />
            <br/>
            {props.children}
        </OrderContext.Provider>
    )
}
