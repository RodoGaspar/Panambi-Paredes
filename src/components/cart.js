import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const preBuyer = {
    name: "",
    phone: "",
    email: "",
}

export const Cart = () =>{
    const carritoContx = useContext(CartContext);
    const prods = [...carritoContx.cart];
    const [ buyer, setBuyer ] = useState(preBuyer)
    const [ total, setTotal] = useState(0);

    /* const sumTotal = () => {
        setTotal(prods.reduce((acum, prods)=> acum + (prods.quant * prods.precio), 0))
    }; */

    const order = {
        buyer,
        item: prods,
        total,
    }

    const generateOrder = async (order) => {
        const newOrder = await addDoc(collection(db, "orders"), {
            ...order,
            date: Timestamp.fromDate(new Date())
        })
        return newOrder
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("order", order)
        console.log("buyer", buyer)
        if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "" ){

            generateOrder(order)
                .then((res) => {
                    alert(`Tu orden se envió con exito, el número de la misma es ${res.id}`)
                })
        } else {
            alert("Hubo un error en el formulario, por favor verifica los datos")
        }
    }

    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        })
    }

    const mailVer = (e) => {
        if (e.target.value !== buyer.email) {
            alert('verifica que el email sea correcto')
        }
    }

    useEffect(() => {
        if (prods.length !== 0) {
            setTotal(prods.reduce((acum, prods)=> acum + (prods.quant * prods.precio), 0))
        } else {
            setTotal(0)
        }
    }, [prods])
    

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

                    <form 
                        onSubmit={handlerSubmit}
                        
                    >
                        <input
                            className=""
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={order.name}
                            onChange={handlerChange}
                        />
                        <input
                            className=""
                            type="number"
                            placeholder="Teléfono"
                            name="phone"
                            value={order.phone}
                            onChange={handlerChange}
                        />
                        <input
                            className=""
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={order.email}
                            onChange={handlerChange}
                        />
                        <input
                            className=""
                            type="email"
                            placeholder="Confirma tu Email"
                            name="emailVerification"
                            onBlur={mailVer}
                        />
                        <button className="">Enviar Orden</button>                        

                    </form>
            </>
            )}
            
        </>
    )
}