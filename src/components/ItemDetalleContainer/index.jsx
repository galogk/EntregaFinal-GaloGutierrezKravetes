import React from 'react'
import ItemDetalle from '../ItemDetalle'
import Header from "../Header"
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/firebase'; 

function index() {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    const q = query(
      collection(db, "items"),
      where("id", "==", id)
    ) 

    useEffect(() => {
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => ({...doc.data(), documentId: doc.id})))
      })
    }, [id]);

  if (productos === undefined) {
    return <>Cargando...</>
  }
  return (
    <>
      <Header></Header>
      <ItemDetalle productos={productos[0]}/>
    </>
  )
}

export default index