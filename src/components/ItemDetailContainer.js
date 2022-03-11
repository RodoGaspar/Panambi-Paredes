import  {ItemDetail}  from "./ItemDetail";
import {useEffect, useState} from "react";
import { prods } from "./prods";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
   const {id} = useParams();
   const [itemProp, setItemProp] = useState ([]);
   const [loading, setLoading] = useState(true);

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
           setLoading(false);
           console.log('respues', respues);
       }
       obtenerProducto(id)
        }, [id]);


    return(
        <>
            {loading ? (
                <h1 style={{
                    color: '#fffd91',
                    backgroundColor: '#892be27f',
                    height: '100%',
                    textAlign: 'center',
                }}>Cargando Detalles...</h1>
            ):(
                <>
                    <div style={{
                            backgroundColor: '#3e8f13',
                            background: 'radial-gradient(circle, #b1ff86 0%, #3e8f13 100%',
                            padding: '5%'}}>
                        <ItemDetail props={itemProp}/>
                    </div>
                </>
            )} 
            
        </>
   ) 
};