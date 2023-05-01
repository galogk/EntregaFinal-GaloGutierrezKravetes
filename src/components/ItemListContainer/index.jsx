import styles from "./itemlistcontainer.module.css"
import React from 'react'
import Header from "../Header"
import ItemList from '../ItemList'
import {useEffect, useState} from "react"
import db from "../../db/firebase"
import {collection, getDocs, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom"

const index = () => {
  let { categoria } = useParams()
  if (categoria === undefined){
    categoria = "todo"
  }
  const [productos, setProductos] = useState([]);
  const productosRef = collection(db, "items")
  const q = query(
    collection(db, "items"),
    where("category", "==", categoria)
  ) 
  
  const getItems = async () => {
      const productosCollection = await getDocs(productosRef)
      const productos = productosCollection.docs.map((doc) => ({...doc.data(), documentId: doc.id}))
      setProductos(productos)
  }

  const getFilteredItems = async () => {
    getDocs(q).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({...doc.data(), documentId: doc.id})))
    })
  }

  useEffect(() => {
    if (categoria !== "todo"){
      getFilteredItems()
    } else {
      getItems()
    }
}, [categoria]);

if (productos.length == []) {
 return (
  <>
      <Header />
      <>Cargando...</>
  </>
 )
} else {
  return (
    <>
        <Header />
        <div className={styles.shopping}>
        <ItemList productos={productos} />
    </div>
    </>
  )
}
  
}

export default index