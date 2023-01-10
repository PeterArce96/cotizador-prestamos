// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS
// en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables
// etiquetas html que solo tengan apertura, se tienen que cerrar con "/>" al final
// PROPS - Comunicación entre componentes
// STATE - cual es el estado de tu app, carrito lleno o vacío, usuario autenticado,etc
// escontramos los state antes del return, ejemplo: cantidad y la función que lo va a modificar es setCantidad, se recomienda ponerle "set" antes del nombre del state para la función

import { useState } from 'react'
import Header from "./components/Header"

function App() {
  const [cantidad, setCantidad] = useState(10000);


  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      /> 
    </div>
  )
}

export default App
