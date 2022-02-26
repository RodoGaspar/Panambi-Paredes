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
                    <Item {...producto} key={producto.id}/>    
            ))}
        </div>
    );
};