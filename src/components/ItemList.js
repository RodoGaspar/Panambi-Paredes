import { Link } from "react-router-dom";
import {Item} from "./Item";

export const ItemList = ({prods}) => {
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alingnItems: 'center',
            }}
        >
            {prods.map((producto) => (
                /* <Link to={`/item/:${producto.id}`}> */
                    <Item {...producto} key={producto.id}/>
                /* </Link> */    
            ))}
        </div>
    );
};