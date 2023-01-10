// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS
// en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables
// etiquetas html que solo tengan apertura, se tienen que cerrar con "/>" al final
// PROPS - Comunicación entre componentes
// STATE - variables que se van a cambiar, cual es el estado de tu app, carrito lleno o vacío, usuario autenticado,etc
// escontramos los state antes del return, ejemplo: cantidad y la función que lo va a modificar es setCantidad, se recomienda ponerle "set" antes del nombre del state para la función
// la función handleChange, el "handle" es por convención, se le coloca antes luego va el Evento que va a usar, en este caso el onChange.

import { useState } from 'react'
import Header from "./components/Header"

function App() {
  // variable que se va a modificar -STATE
  const [cantidad, setCantidad] = useState(10000);
 // variables que no se van a modificar 
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert('Cantidad no válida');
      return;
    }

    setCantidad(valor);
  }
  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert('Cantidad no válida');
      return;
    }

    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <button
          type='button'
          className='h-10 w-10 flex justify-center font-bold text-white text-2xl
          bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickDecremento}
        >-</button>

        <button
          type='button'
          className='h-10 w-10 flex justify-center font-bold text-white text-2xl
          bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickIncremento}
        >+</button>
      </div>

      <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      /> 

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>

    </div>
  )
}

export default App
