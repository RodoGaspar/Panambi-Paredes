import React, {useState} from "react";
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) =>{
  const [numero, setNumero] = useState(0);

  const mas = () =>{
      numero < stock && setNumero(numero+ 1);
  };
  const menos = () => {
      numero > initial && setNumero(numero-1);
  };
 
/* const addToKart = () => {
    alert('Agregaste ' + numero + ' productos al carrito');

}; */
  
  return(
      <div className="tarjeta">
          <div>
              <div className="contador">
                <button disabled={numero>=stock} onClick={mas} className="tarjBtnMas">+</button>
                <p className="numerito">{numero}</p>
                <button className="tarjBtnMenos" disabled={numero<=initial} onClick={menos} >-</button>
              </div>
              <button disabled={numero === 0 || stock === 0} onClick={()=> onAdd(numero)} className="addTo">Agregar al carrito</button>
          </div>
      </div>
  );
};