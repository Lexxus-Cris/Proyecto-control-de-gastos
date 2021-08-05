import React, { Fragment, useState } from 'react'

const Pregunta = () => {

   // Definir el state de la cantidad inicial
   const [cantidad, setCantidad] = useState(0);

   // Funcion que lee el presupuesto
   const definirPresupuesto = (e) => {
      setCantidad(parseInt(e.target.value))
   }

   // Submit para definir el presupuesto
   const agregarPresupuesto = e => {
      e.preventDefault();

      // Validar

      // Si pasa la validacion
   }

   return (
      <Fragment>
         <h2>coloca tu presupuesto</h2>

         <form
            onSubmit={agregarPresupuesto}
         >
            <input
               type="number"
               className="u-full-width"
               placeholder="Definir presupuesto"
               onChange={definirPresupuesto}
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
