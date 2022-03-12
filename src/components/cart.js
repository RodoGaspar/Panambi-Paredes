import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export const Cart = () =>{
    const carritoContx = useContext(CartContext);
    console.log('carritoContx', carritoContx)
    const prods = [...carritoContx.cart];
    console.log('prods', prods)
    
    return(
        <>
            <h1 style={{
                                    backgroundColor: '#3e8f13',
                                    color: '#fffd91',
                                    padding: '2px',
                                    textAlign: 'center',
                                    height:'100%',
                                }}>Tus Productos Elegidos</h1>
            {prods.length === 0 ? (
                <>
                    <h1>Carrito Vacío</h1>
                    <Link to={'/'}>Ir a la tienda</Link>
                </>    
            ) : (
                <>
               { prods.map((i) => {
                    console.log('i', i);
                    console.log('iID', i.id);
                    return(
                        <>
                            <div>
                                <div 
                                    style={{
                                    backgroundColor: '#3e8f13',
                                    height:'100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'space-between',}}>
                                    
                                    <p style={{
                                        margin: '10px'
                                    }}>
                                        {i.size} x {i.quant} = ${i.quant * i.precio}
                                    </p>
    
                                    <button onClick={()=> carritoContx.removeItem(i.id)}>X</button>
                                </div>
                                
                            </div>
                        </>
                    )
                })}
                <p>Con un total de ${prods.reduce((acum, item)=> acum + (item.quant * item.precio), 0)}</p>
                <button onClick={()=> carritoContx.clear()}>Vaciar Carrito</button>

                </>
            )}
            
        </>
    )
}