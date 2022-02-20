import  ItemDetail  from "./ItemDetail";
import {useEffect, useState} from "react";
import { upProds } from "../prods";

const ItemDetailContainer = () => {
   const [item, setItem] = useState ([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
       const getItem = async () => {
           const resopnse = await fetch(upProds)
       }
   })

    return(
        <>
        </>
   ) 
};