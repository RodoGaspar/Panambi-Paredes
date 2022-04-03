import {useEffect, useState} from "react";
import './ItemListContainer.css';
import {ItemList} from "../ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({title}) => {
    const [produ, setProdu] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [subTitle, setSubTitle] = useState("");

   const { categoryId } = useParams();

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

    const getDataCategory_query = async () => {
        try{
            const q = query(collection(db, "itemCollection"), where("cat", "==", categoryId));
            const querySnapshot = await getDocs(q);
            setProdu(querySnapshot.docs.map((doc) => doc = {id: doc.id, ...doc.data()}));
            setCargando(false);
        } catch (error){
            console.warn('error', error)
        }
    }


    useEffect(() => {
        categoryId ? getDataCategory_query() : getData();
        categoryId === "planta" ? setSubTitle("Plantas") : categoryId === "maceta" ? setSubTitle("Macetas") : setSubTitle("");
    }, [categoryId])



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
                        <h1 className="listContainer__title">{title}</h1>
                        <h2 className="listContainer__subTitle">{subTitle}</h2>
                        <ItemList prods={produ}/>    
                    </div>
                </>
            )}
            
        </>
        
    );
};
