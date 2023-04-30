import {END_POINT_ORDER} from "../constant/apiStuff";
import {getLocalStorageValue} from "../utils/localStorage.utils";



export const createOrder = async (value) => {
    try {
        const res = await fetch(`${END_POINT_ORDER}/create`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                client: getLocalStorageValue("id_client"),
                products: value,
                total: 300 
            }),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteOrder = async (id_order) => {
    try {
        const res = await fetch(`${END_POINT_ORDER}/delete/${id_order}`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                client: getLocalStorageValue("id_client"),
            })
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}