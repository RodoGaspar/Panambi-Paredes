import { CartContext } from "./cartContext";
import { useState } from "react";

export const CustomContex = ({children}) => {
const [cart, setCart] = useState([]);
const [cartSize, setCartSize] = useState(0);

const addItem = (item, quant) =>{
    let itemQuant = {...item, quant};
    if (!isInCart(item.id)) {
        setCart([...cart, itemQuant]);
        setCartSize((prevState) => prevState + itemQuant.quant);
    } else {
        const cartB = cart;
        const pos = cart.findIndex((item) => item.id === itemQuant.id);
        cartB[pos].quant = cartB[pos].quant + quant;
        setCart(cartB);
        setCartSize((prevState) => prevState + itemQuant.quant);
    }; 
};

const removeItem = (itemId) =>{
    const cartAux = cart.filter(element => element.id !== itemId);
    setCart(cartAux);
};

const clear = () => {
    setCart([]);
    setCartSize(0)
};

const isInCart = (id) => {
    return cart.some((e) => id === e.id); 
}; 

    return(
        <CartContext.Provider value={{cart, cartSize, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>

    )
}