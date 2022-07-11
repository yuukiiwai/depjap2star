import { createContext,useState } from "react";

export interface order{
    menu:string,
    topping:string,
    size:string,
}

export const OrderContext = createContext<any>({});

export const OutorderProvider = (props:any)=>{
    const [outorder,setOrder] = useState<order>({menu:"",size:"",topping:""});
    return(
        <OrderContext.Provider value={{outorder,setOrder}}>
            {props.children}
        </OrderContext.Provider>
    )
}