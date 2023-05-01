Hola! Esta es mi entrega final.
Hice una simulaccion de un E-commerce basado en el proyecto de roboticas que hice en el Jose Manuel Estrada, los productos no estan relacionados a los productos que presentamos pero intente agregar toda la informacion que me acordaba de nuestra "mini-empresa".

Hooks usados:

React-Router-Dom: La base de toda la pagina, para poder acceder y mostrar los diferentes elementos de la pagina web.
 -Links, UseLinks, Navlink, useParams, Routes, Route

Context: Para poder usar variables que preciso actuan como globales para poder cambiar, guardar o remover elementos relacionados al carrito de compra.
 -useContext, createContext, Provider, Consumer 

useEffect: Para poder compilar todos los datos de los productos del fakestoreAPI y convertirlo en un array con useState.
useState: Usa los datos del useEffect para asignar los datos del producto a un array. 

React Icons, BsFillCartFill: Usado para representar el icono del carrito de compras.

Firebase: Usado para poder anotar todas las compras realizadas por el usuario, y posiblemente la lista de productos sin tener que usar una pagina externa.
 -InitializeApp
 -Firestore (collection, getDocs, query, where): Usados para ingresar a la base de datos de mi proyecto de firebase y sus productos que yo ingrese al documento.
 
 ![](https://github.com/galogk/EntregaFinal-Galogk/blob/master/opera_K0Yajku3rG.gif)
