import React, { Fragment, useState } from 'react'

const Pregunta = () => {

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
         : setError(false) ; setCantidad('')
      // Si pasa la validacion

      console.log(cantidad);

   }

   return (
      <Fragment>
         <h2>coloca tu presupuesto</h2>
         {error ? <span></span> : null}

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
