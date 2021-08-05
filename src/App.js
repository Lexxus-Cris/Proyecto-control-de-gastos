import React, { useState } from 'react'

import Pregunta from "./components/Pregunta";
import Form from './components/Form';

function App() {

  // Definimos el state del presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // Definimos el state del restante
  const [restante, setRestante] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Control de gastos semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta 
            guardarPresupuesto={setPresupuesto}
            guardarRestante={setRestante}
          />
          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
