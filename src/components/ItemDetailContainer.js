import  {ItemDetail}  from "./ItemDetail";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const ItemDetailContainer = () => {
   const {id} = useParams();
   const [itemProp, setItemProp] = useState ([]);
   const [loading, setLoading] = useState(true);

   const getItemProp = async () => {
        try {
            const document = doc(db, "itemCollection", id)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data() }
            setItemProp(result)
            setLoading(false)
        } catch (error) {
            console.warn('error', error)
        }
   };

   useEffect(() => {
    getItemProp()
   }, [id])



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
