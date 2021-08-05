import React, { Fragment, useState } from 'react'

import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarComponent}) => {

   // Definir el state de la cantidad inicial
   const [cantidad, setCantidad] = useState('');

   // Definir el state del error para la validacion
   const [error, setError] = useState(false)

   // Funcion que lee el presupuesto
   const definirPresupuesto = (e) => {
      setCantidad(parseInt(e.target.value))
   }

   // Submit para definir el presupuesto
   const agregarPresupuesto = e => {
      e.preventDefault();

      // Validar
      cantidad <= 0 || isNaN(cantidad)
         ? setError(true)
         // Si pasa la validacion
         : setError(false)

      // LLamado a las funciones externas
      guardarRestante(cantidad)
      guardarPresupuesto(cantidad);
      actualizarComponent(false)
   }

   return (
      <Fragment>
         <h2>Coloca tu presupuesto</h2>
         {error ? <Error message="El presupuesto es Incorrecto" /> : null}

         <form
            onSubmit={agregarPresupuesto}
         >
            <input
               type="number"
               className="u-full-width"
               placeholder="Definir presupuesto"
               onChange={definirPresupuesto}
               value={cantidad}
            />

            <input
               type="submit"
               value="Agregar"
               className="button-primary u-full-width"
            />
         </form>
      </Fragment>
   )
}

export default Pregunta
