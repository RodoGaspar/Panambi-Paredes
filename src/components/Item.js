import {ItemCount} from './ItemCount/ItemCount';
import { Link } from "react-router-dom";

export const Item = ({id, size, foto, precio}) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #7630E6',
                margin: '40px',
            }}
        >
            <h3>{size}</h3>
            <img src={foto} width='150px' alt={size}/>
            <h4>$ {precio}</h4>
            <ItemCount stock={20} initial={0}/>
            <Link to={`/item/${id}`}>
                <button>Ver Más</button>
            </Link>

        </div>
    );

};
