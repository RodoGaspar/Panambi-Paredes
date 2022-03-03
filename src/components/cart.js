import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const Cart = () =>{
    const carritoContx = useContext(CartContext);
    console.log('carritoContx', carritoContx)
    const prods = [...carritoContx.cart];
    console.log('prods', prods)
    return(
        <>
            {prods.length === 0 ? (
                <h1>Carrito Vacío</h1>
            ) : (
                prods.map((i) => {
                    return(
                        <>
                            <div style={{
                                backgroundColor: '#3e8f13',}}>
                                <h1 style={{
                                    backgroundColor: '#3e8f13',
                                    color: '#fffd91',
                                    padding: '2px',
                                    textAlign: 'center'
                                }}>Tus Productos Elegidos</h1>
                                <p>
                                    {i.size} x {i.cantidad} = ${i.cantidad * i.precio}
                                </p>
                            </div>
                        </>
                    )
                })
            )}
            
        </>
    )
}