import {useEffect, useState} from "react";
import './ItemListContainer.css';
import { prods } from "../prods";
import {ItemList} from "../ItemList";
import { Link } from "react-router-dom";
import { Item } from "../Item";

export const ItemListContainer = ({title}) => {
    const [produ, setProds] = useState([]);
    const [cargando, setCargando] = useState(true);
    const prodList = ()=>{
        return new Promise((resolve, reject)=>{
            const upProds = prods;
            setTimeout(()=>{
                resolve(upProds)
            }, 2000)
        })
    }

    

    useEffect(() => {
        prodList ()
            .then((res) => {
                setProds(res);
                setCargando(false);
            })
            .catch((error) => {
                console.log(error);
            })
            }, []);
            console.log('productos', produ)

    return (
        <>

            {cargando ? (
                <h1>Cargando productos...</h1>
            ):(
                <>
                    <div className="listContainer">
                        <h1>{title}</h1>;
                        {/* <Link to={`/item/:${produ.id}`}> */}
                        
                            <ItemList prods={produ}/>
                        {/* </Link> */}     
                    </div>
                </>
            )}
            
        </>
        
    );
};