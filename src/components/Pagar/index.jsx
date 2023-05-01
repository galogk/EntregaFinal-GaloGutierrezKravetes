import React, { useContext, useState } from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { CartContext } from '../../contexts/ShoppingCartContext'
import { useNavigate } from 'react-router-dom'

function index() {
  const [cart] = useContext(CartContext)
  const [nombre, setNombre] = useState({})
  const Navigate = useNavigate();
  const [mail, setMail] = useState({})

  let total = cart.map(item => {
    return item.price * item.quantity})
  .reduce((total, itemPrice) => total + itemPrice, 0)

    const updateName = e => {
      setNombre({
        ...nombre,
        nombre: e.target.value
      })
    }
    const updateMail = e => {
      setMail({
        ...mail,
        email: e.target.value
      })
    }
    const submit = e => {
      e.preventDefault()
      const order = {
        mail: mail,
        nombre: nombre,
        items: cart,
        total: total
      }
      const db = getFirestore()
      const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
      Navigate('/gracias')
    }

  if (total == 0){
    <>404 - ¿Como llegaste aqui?</>
  } else {
  return (
    <>
        <h2>Total para pagar: ${total}</h2>
          <form method="post" onSubmit={submit}>
            <label>Nombre: 
              <input type="name" id="nombre" onChange={updateName} placeholder="Pedro"></input>
            </label>
            <br/>
            <label>Email: 
              <input type="email" id="mail" onChange={updateMail} placeholder="Pedro@yahoo.com"></input>
            </label>
            <h4>Esta seguro/a de su compra?</h4>
            <button type="submit">Confirmar</button>
            <button type="reset">Cancelar</button>
          </form>
    </>
  )
  }
}
export default index