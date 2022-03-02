import { CartContext } from "./cartContext";
import { useState } from "react";

export const CustomContex = ({children}) => {
const [cart, setCart] = useState([]);

const addItem = (newItem, quantity) =>{
    setCart([...cart, {item: newItem, quantity: quantity}])
};

const removeItem = (itemId) =>{

};

const clear = () => {

};

const isInCart = () => {

}; 

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>

    )
}