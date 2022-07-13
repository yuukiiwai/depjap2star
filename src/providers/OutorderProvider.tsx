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

export const OrderContext = createContext<any>({});

export const OutorderProvider = (props:any)=>{
    const [outorder,setOrder] = useState<order>({menu:"",size:"",topping:""});
    const [steps,setSteps] = useState<Array<step>>();
    return(
        <OrderContext.Provider value={{outorder,setOrder,steps,setSteps}}>
            {steps?.map((item,key)=>{
                <Steps
                    step = {item.step}
                    value = {item.value}
                />
            })}
            {props.children}
        </OrderContext.Provider>
    )
}

const Steps:React.FC<step> = (props:step) =>{
    return(
        <div>
            {">"}{props.step}
        </div>
    );
}