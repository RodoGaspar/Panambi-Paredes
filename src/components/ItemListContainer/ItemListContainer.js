import {useEffect, useState} from "react";
import './ItemListContainer.css';
import { upProds } from "../prods";
import ItemList from "../ItemList";

const ItemListContainer = ({title}) => {
    const [produ, setProds] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        upProds
            .then((res) => {
                setProds(res);
            })
            .finally(() => {
                setCargando(false)
            })
            .catch((error) => {
                console.log(error);
            })
            }, []);

    return (
        <>

            {cargando ? (
                <h1>Cargando productos...</h1>
            ):(
                <>
                    <div className="listContainer">
                        <h1>{title}</h1>
                        <ItemList prods={produ}/>
                    </div>
                </>
            )}
            
        </>
        
    );
};

export default ItemListContainer