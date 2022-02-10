import carrito from '../../assets/cartImage.png';

export const Carrito = () =>{
    return(
        <div>
            <img src={carrito} alt="imagen de carrito" style={{width:30}}/>
            <span style={{fontsize:20}}>15</span> 
        </div>
    )
};