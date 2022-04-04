import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import Swal from 'sweetalert2';
import './cart.css';

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

            localStorage.setItem("Orden", JSON.stringify(order));
            generateOrder(order)
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Genial!',
                        text: `Tu orden se envió con exito, el número de la misma es ${res.id}`,
                      })
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Mmmm...',
                text: 'Parece que hay un error en el formulario, por favor verifica los datos :)',
              })
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
            Swal.fire({
                icon: 'info',
                title: 'Mmmm...',
                text: 'verifica que el email sea correcto',
              })

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
            }}>
            Tus Productos Elegidos</h1>
            {prods.length === 0 ? (
                <>
                    <div className="cart--empty">
                        <h1 className="cart__title--empty">Carrito Vacío</h1>
                        
                            <Link style={{
                                backgroundColor: '#b1ff86', 
                                color: '#3e8f13', 
                                textDecoration: 'none',
                                alignSelf:'center'
                                }} to={'/'}>Vuelve a la tienda</Link>
                    </div>
                </>    
            ) : (
            <>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems:'flex-start',
                    backgroundColor:'#3e8f13 '
                    }}>
                    <div style={{
                        width:'45vw'
                    }}>
                        { prods.map((i) => {
                                return(
                                    <>
                                        <div 
                                            style={{
                                            backgroundColor: '#3e8f13',
                                            height:'100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignContent: 'space-between',}}>
                                            <h3 style={{
                                                color:'#fffd91'
                                            }}>{i.size}</h3>
                                            <img src={i.foto} width='60rem' alt={i.size} style={{margin: '1rem'}}/>
                                            <p style={{
                                                margin: '10px'
                                            }}>
                                                {i.size} x {i.quant} = ${i.quant * i.precio}
                                            </p>
            
                                            <button style={{
                                                backgroundColor: '#892be27f'
                                            }} onClick={()=> carritoContx.removeItem(i.id)}>Quitar Productos</button> 
                                        </div>
                                    </>
                                )
                            })}
                        <div style={{
                            backgroundColor:'#3e8f13 ',
                            color:'#fffd91'
                            }}>
                        <p>Con un total de ${prods.reduce((acum, item)=> acum + (item.quant * item.precio), 0)}</p>
                        <button onClick={()=> carritoContx.clear()}>Vaciar Carrito</button>
                        </div>
                    </div>
                    
                    <div style={{
                        width:'45vw',
                        alignSelf:'rigth',
                    }}>
                    <h2 style={{
                        backgroundColor:'#3e8f13',
                        color:'#fffd91'
                    }}>Completa tus datos para realizar el pedido</h2>
                        <form 
                            onSubmit={handlerSubmit}
                            style={{
                                display:'flex',
                                flexDirection:'column'
                            }}   
                        >
                            <input
                                id="buyer__Name"
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={order.name}
                                onChange={handlerChange}
                            />
                            <input
                                id="buyer__phone"
                                type="number"
                                placeholder="Teléfono"
                                name="phone"
                                value={order.phone}
                                onChange={handlerChange}
                            />
                            <input
                                id="buyer__email"
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
                    </div>    
                </div>
            </>
            )}
            
        </>
    )
}