import {useEffect, useState} from "react";
import './ItemListContainer.css';
import {ItemList} from "../ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({title}) => {
    const [produ, setProdu] = useState([]);
    const [cargando, setCargando] = useState(true);

   const { category } = useParams;

    const getData = async () => {
        try{
            const itemsCollection = collection(db, "itemCollection");
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()});
            setProdu(result);
            setCargando(false);
        } catch (error){
            console.warn('error', error)
        }
    }
    console.log('produ', produ)

    const getDataCategory_query = async () => {
        try{
            const q = query(collection(db, "itemCollection"), where("cat", "==", category));
            const querySnapshot = await getDocs(q);
            setProdu(querySnapshot.docs.map((doc) => doc = {id: doc.id, ...doc.data()}));
            setCargando(false);
        } catch (error){
            console.warn('error', error)
        }
    }

    useEffect(() => {
        category?getDataCategory_query():getData()
    }, [category])

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
