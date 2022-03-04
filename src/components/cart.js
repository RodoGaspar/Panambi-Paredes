import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

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
                <h1>Carrito Vacío</h1>
            ) : (
                prods.map((i) => {
                    console.log('i', i)
                    return(
                        <>
                            <div>
                                <div style={{
                                    backgroundColor: '#3e8f13',
                                    height:'100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'space-between',}}>
                                    
                                    <p style={{
                                        margin: '10px'
                                    }}>
                                        {i.props.size} x {i.cantidad} = ${i.cantidad * i.props.precio}
                                    </p>
                                    <button onClick={()=> carritoContx.removeItem(prods, i.props.id)}>X</button>
                                </div>
                                <button onClick={()=> carritoContx.clear()}>Vaciar Carrito</button>
                            </div>
                        </>
                    )
                })
            )}
            
        </>
    )
}