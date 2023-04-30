
import React, {createContext, useContext, useState} from "react";
import {createOrder, deleteOrder} from "../service/serviceOrder";


const orderContext = createContext();

export function UseOrderContext(){
    return useContext(orderContext);
}


export default function ProviderOrder({children}){

    const [orderList, setOrderList] = useState();


    const Use_CreateOrder = async (value)=> {
        const res = await createOrder(value);
        console.log({from: "order", res});
        return setOrderList(res);
    }

    const Use_DeleteOrder = async (id_order)=> {
        const res = await deleteOrder(id_order);
        console.log({from: "order", res});
        return setOrderList(res);
    }



    return(
        <orderContext.Provider value={{Use_CreateOrder, Use_DeleteOrder, orderList}}>
            {children}
        </orderContext.Provider>
    )

}