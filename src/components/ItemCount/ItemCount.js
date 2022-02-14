import React, {useState} from "react";

const Contador = ({stock, initial, onAdd}) =>{
  const [number, setNumber] = useState(0);
  const [disable, setDisable] = useState(false);

  const mas = () =>{
      number < stock && setNumber(number+ 1);
  };
  const menos = () => {
      number > initial && setNumber(number-1);
  };
  const disMas = () =>{
      number >= stock ? setDisable(true) : disable(false) 
  };
  const disMenos = () =>{
      number <= initial ? setDisable(true) : disable(false)
  } 
  

  
  return(
      <div className="tarjeta">
          <div>
              <button disabled={disMas} onClick={mas} className="tarjBtn">+</button>
              <p>{number}</p>
              <button disabled={disMenos} onClick={menos} className="tarjBtn">-</button>
              <button >Agregar al carrito</button>
          </div>
      </div>
  );
};

export default Contador;