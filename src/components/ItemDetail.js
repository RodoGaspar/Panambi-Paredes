import { useState, useContext } from 'react';
import {ItemCount} from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

export const ItemDetail = ({props}) => {
    const [cantidad, setCantidad] = useState(Number);
    const addToCart = (numero)=>{
        setCantidad(numero);
        console.log('numero', numero);
        console.log('cantidad', cantidad);
        
    };
    const newCartContext = useContext(CartContext);
    console.log('context', newCartContext)
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #7630E6',
                margin: '40px',
            }}
        >
            <h1 style={{
                textAlign: 'center',
                color: '#fffd91',
                
            }}>{props.size}</h1>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '5px',
                    color: '#fffd91',
            }}> 
                <img src={props.foto} width='200px' alt={props.size}/>
                <div style={{
                    margin: '5px',
                    textAlign: 'center',
                    backgroundColor: '#8F6B8f',
                }}>
                    <p>{props.info}</p>
                    <h2>${props.precio}</h2>
                </div>
            </div>
            <div  style={{display: cantidad > 0 ? 'none' : 'block'}}>
                <ItemCount stock={props.stock} initial={0} onAdd={(numero)=> addToCart(numero)} />
            </div>
            {console.log('props', props)}
            <Link to={'/cart'}> 
                <button style={{
                    display: cantidad > 0 ? 'block' : 'none',
                    backgroundColor: '#7830E6'}} onClick={()=> newCartContext.addItem({props, cantidad})}>Terminar Compra</button>
            </Link>
        </div>
    );


};