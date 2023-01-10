// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS


function App() {

  const hola = "Hola Mundo";
  // en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables
  const auth = false

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {hola}

      {auth ? 'autenticado': ' no autenticado'}
    </div>
  )
}

export default App
