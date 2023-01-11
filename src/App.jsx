// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS
// en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables
// etiquetas html que solo tengan apertura, se tienen que cerrar con "/>" al final
// PROPS - Comunicación entre componentes
// STATE - variables que se van a cambiar, cual es el estado de tu app, carrito lleno o vacío, usuario autenticado,etc
// escontramos los state antes del return, ejemplo: cantidad y la función que lo va a modificar es setCantidad, se recomienda ponerle "set" antes del nombre del state para la función
// la función handleChange, el "handle" es por convención, se le coloca antes luego va el Evento que va a usar, en este caso el onChange.

// useEffect, se ejecuta cuando el componente está listo, toma un array de dependencias, se le puede pasar un state para "escuchar" los cambios que ocurren en ese state, en caso de que el state se actualice useEffect se va a ejecutar nuevamente

import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Button from './components/Button';
import {formatearDinero, calcularTotalPagar} from './helpers'

function App() {
  // variable que se va a modificar -STATE
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad,meses);
    setTotal(resultadoTotalPagar);

  }, [cantidad, meses]);

  useEffect(() => {
    // calcular el pago mensual
    setPago(total / meses);
  },[total]);

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
    <div className="my-20 max-w-lg mx-auto rounded-xl border-4 border-slate-900 border-solid bg-indigo-900 shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <Button 
          operador = '-'
          fn = {handleClickDecremento}
        />

        <Button 
          operador = '+'
          fn = {handleClickIncremento}
        />        
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

      <p className='text-center my-10 text-5xl font-extrabold text-lime-500'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-white text-center'>
        Elige un <span className='text-lime-500'>Plazo </span> a pagar
      </h2>

      <select className='mt-5 w-full p-2 bg-slate-700 border border-gray-300 rounded-lg text-center text-xl font-bold text-white'
      value={meses}
      onChange= {e => setMeses(+e.target.value)}>
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-slate-900 p-5 rounded-lg border'>
        <h2 className='text-2xl font-extrabold text-white text-center'>
          Resumen <span className='text-lime-500'>de pagos </span>
        </h2>

        <p className='text-xl text-white text-center font-bold'><span className='text-lime-500'>{meses}</span> Meses</p>
        <p className='text-xl text-white text-center font-bold'><span className='text-lime-500'>{formatearDinero(total)}</span> Total a pagar</p>
        <p className='text-xl text-white text-center font-bold'><span className='text-lime-500'>{formatearDinero(pago)}</span> Mensuales</p>
      </div>

    </div>
  )
}

export default App
