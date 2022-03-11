import { CartContext } from "./cartContext";
import { useState } from "react";

export const CustomContex = ({children}) => {
const [cart, setCart] = useState([]);
const [cartSize, setCartSize] = useState(0);

const addItem = (item, quant) =>{
    setCart([...cart, {...item, quant}]);
    setCartSize((prevState) => prevState + cart.cantidad);
    /* if (isInCart(cart, props.id)){
        const cartB = [...cart];
        const repeatItem = cart.findIndex(
            (producto) => producto.id === props.id 
        )
        cartB[repeatItem] = {
            ...cartB[repeatItem], quantity: cartB[repeatItem].quantity + quantity,
        }
        setCart(cartB);
        setCartSize((prevState) => prevState + cart.cantidad);
    } else {
        setCart([...cart, {...props, quantity}]);
        setCartSize((prevState) => prevState + cart.cantidad);
    };    */ 
};

/* en Proceso, no logro resolverla */
 const removeItem = (cart, itemId) =>{
    cart.filter(element => element.id !== itemId)
};

const clear = () => {
    setCart([]);
};

const isInCart = (cart, id) => {
    return cart.some(cartId => id === cartId); 
}; 

    return(
        <CartContext.Provider value={{cart, cartSize, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>

    )
}