import React, { useState } from 'react'

import Pregunta from "./components/Pregunta";
import Form from './components/Form';
import ListaGastos from './components/ListaGastos';

function App() {

  // Definimos el state del presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // Definimos el state del restante
  const [restante, setRestante] = useState(0)

  //  Definicion de un nuevo state para mostrar componentes de forma condicional
  const [updateComponent, setUpdateComponent] = useState(true);

  // State para el listado de gastos
  const [gastos, setGastos] = useState([])

  // Agregar los gastos al state
  const agregarGasto = (gasto) => {
    setGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Control de gastos semanal</h1>
      </header>
          <div className="contenido-principal contenido">
          {/* Definimos la carga condicional de los componentes */}
          {updateComponent === true
            ? (
              <Pregunta 
                guardarPresupuesto={setPresupuesto}
                guardarRestante={setRestante}
                actualizarComponent={setUpdateComponent}
              />
            )
            : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    agregarGasto={agregarGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListaGastos 
                    gastos={gastos}
                  />
                </div>
              </div>
            )
          }
        </div>
    </div>
  );
}

export default App;
