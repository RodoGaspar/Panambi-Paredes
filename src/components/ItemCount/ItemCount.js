import React, {useState} from "react";

const Contador = ({stock, initial, onAdd}) =>{
  const [number, setNumber] = useState(0);
  const [disable, setDisable] = useState(false);

  const mas = () =>{
      number < stock ? setNumber(number+ 1) : setDisable(true);
  };
  const menos = () => {
      number > initial && setNumber(number-1) && setDisable(false);
  };
  

  
  return(
      <div className="tarjeta">
          <div>
              <button disabled={disable} onClick={mas} className="tarjBtn">+</button>
              <p>{number}</p>
              <button disabled={disable} onClick={menos} className="tarjBtn">-</button>
              <button >Agregar al carrito</button>
          </div>
      </div>
  );
};

export default Contador;