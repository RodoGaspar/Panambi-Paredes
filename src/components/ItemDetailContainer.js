import  {ItemDetail}  from "./ItemDetail";
import {useEffect, useState} from "react";
import { upProds } from "./prods";

export const ItemDetailContainer = () => {
   const [item, setItem] = useState ([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
        upProds
        .then((res) => {
            setItem(res);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
        }, []);
    console.log('upProds', upProds)
    console.log('item', item)


    return(
        <>
            {loading ? (
                <h1>Cargando detalles del producto</h1>
            ):(
                <>
                   <div>
                    <ItemDetail {...item[0]} key={item[0].id}/>
                    </div> 
                </>
            )}
        </>
   ) 
};