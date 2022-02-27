import {useEffect, useState} from "react";
import './ItemListContainer.css';
import { prods } from "../prods";
import {ItemList} from "../ItemList";

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
                <h1 style={{
                    color: '#fffd91',
                    backgroundColor: '#892be27f',
                    height: '100%',
                    textAlign: 'center',
                }}>Cargando productos...</h1>
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