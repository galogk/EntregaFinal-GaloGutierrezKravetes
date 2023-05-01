import React from 'react'
import { useNavigate } from 'react-router-dom';

function index() {
    const Navigate = useNavigate();
    setTimeout(function() {
        window.location.reload
        Navigate('/')
     }, 2500)
  return (
    <div>Gracias por comprar en nuestra tienda!</div>
  )
}

export default index