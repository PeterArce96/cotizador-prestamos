// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS
// en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables
// etiquetas html que solo tengan apertura, se tienen que cerrar con "/>" al final
// PROPS - Comunicación entre componentes
// STATE - cual es el estado de tu app, carrito lleno o vacío, usuario autenticado,etc
// escontramos los state antes del return, ejemplo: cantidad y la función que lo va a modificar es setCantidad, se recomienda ponerle "set" antes del nombre del state para la función
// la función handleChange, el "handle" es por convención, se le coloca antes luego va el Evento que va a usar, en este caso el onChange.

import { useState } from 'react'
import Header from "./components/Header"

function App() {
  let [cantidad, setCantidad] = useState(10000);

  function handleChange(e) {
    console.log(Number(e.target.value));
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
      /> 
    </div>
  )
}

export default App
