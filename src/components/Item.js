import {ItemCount} from './ItemCount/ItemCount';
import { Link } from "react-router-dom";

export const Item = ({id, size, foto, precio}) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #8F6B8f',
                margin: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3e8f13',
            }}
        >
            <h3>{size}</h3>
            <img src={foto} width='150px' alt={size} style={{margin: '2px'}}/>
            <h4>$ {precio}</h4>
            <ItemCount stock={20} initial={0}/>
            <Link to={`/item/${id}`}>
                <button style={{
                    margin: '10px',
                    justifySelf:'center',
                    backgroundColor: '#a15ce2d0',
                }}>Ver Más</button>
            </Link>

        </div>
    );

};
