import { useContext } from 'react';
import  {CartContext} from '../../context/cartContext';
import carrito from '../../assets/cartImage.png';

export const CartWidget = () =>{

    const newCartContext = useContext(CartContext);
    console.log('newCartContextsize', newCartContext.cartSize);
    const prods = [...newCartContext.cart];
    return(
        <div>
            <img src={carrito} alt="imagen de carrito" style={{width:30}}/>
            <span style={{fontsize:20}}>{prods.cantidad}</span> 
        </div>
    )
};