import { CartContext } from "./cartContext";
import { useState } from "react";

export const CustomContex = ({children}) => {
const [cart, setCart] = useState([]);

const addItem = (props, quantity) =>{
    setCart([...cart, {...props, quantity}])
};

/* en Proceso, no logro resolverla */
 const removeItem = (i, itemId) =>{
    i.splice(itemId, 1);
};

const clear = () => {
    setCart([]);
};

const isInCart = (cart, id) => {
    return cart.some(cartId => id === cartId); 
}; 

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>

    )
}