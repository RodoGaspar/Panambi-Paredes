import { useContext } from 'react';
import  {CartContext} from '../../context/cartContext';
import carrito from '../../assets/cartImage.png';

export const CartWidget = () =>{

    const {cart} = useContext(CartContext)
    return(
        <div>
            <img src={carrito} alt="imagen de carrito" style={{width:30}}/>
            <span style={{fontsize:15,
                          display: cart.length === 0 ? 'none' : 'block',
                        }}>{cart.reduce((acum, item)=> acum + item.quant, 0)}</span> 
        </div>
    )
};