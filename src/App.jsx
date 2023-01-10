// en .jsx se puede combinar JS y HTML
// código entre llaves "{}" lo va a tratar como JS
  // en la función App y antes del return, puede escribir cualquier código de JS, for, funciones, variables

import Header from "./components/Header"

function App() {

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
    </div>
  )
}

export default App
