import React, { useState, useEffect } from 'react'

import Pregunta from "./components/Pregunta";
import Form from './components/Form';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definimos el state del presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // Definimos el state del restante
  const [restante, setRestante] = useState(0)

  //  Definicion de un nuevo state para mostrar componentes de forma condicional
  const [updateComponent, setUpdateComponent] = useState(true);

  // State para el listado de gastos
  const [gastos, setGastos] = useState([])

  // state en donde almacenaremos el gasto
  const [gasto, setGasto ] = useState({})

  // State donde crearemos el gasto
  const [ crearGasto, setCrearGasto ] = useState(false)

  // useEffect que actualiza el restante

  useEffect(() => {
    if(crearGasto) {
      // Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])
      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    // resetear a false
    setCrearGasto(false)
  }, [gasto])

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
                    guardarGasto={setGasto}
                    hacerGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListaGastos 
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
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
