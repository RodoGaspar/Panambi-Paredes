import  {ItemDetail}  from "./ItemDetail";
import {useEffect, useState} from "react";
import { prods } from "./prods";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
   const {id} = useParams();
   console.log('parametro recibido', id)
   const [itemProp, setItemProp] = useState ([]);

   const getupProdsDB = (id) =>{
       return new Promise((resolve, reject)=>{
           const arrProdsDB = prods;
           const itemPropAux = arrProdsDB.find((elemento)=>elemento.id===Number(id));
           setItemProp(itemPropAux)
           setTimeout(()=>{
            resolve(itemProp)
           }, 2000)
       })
   }
   

   useEffect(() => {
       const obtenerProducto = async (id) =>{
           const respues = await getupProdsDB(id);
           console.log('respues', respues)
       }
       obtenerProducto(id)
        }, [id]);
    console.log('prods', prods)
    console.log('itemProp', itemProp)


    return(
                <>
                   <div>
                    <ItemDetail props={itemProp}/>
                    </div> 
                </>
   ) 
};