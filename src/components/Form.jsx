import React, { useState } from 'react'

const Form = () => {

   const [gastoName, setGastoName] = useState('');

   const [cantidad, setCantidad] = useState(0);

   const agregarGasto = e => {
      e.preventDefault()

      // Validar 

      // Construir el gasto


      // Pasar el gasto al componente principal

      // resetear el form
   }

   return (
      <form
         onSubmit={agregarGasto}
      >
         <h2>Agrega tus gastos</h2>

         <div className="campo">
            <label>Nombre del gasto</label>
            <input
               type="text"
               className="u-full-width"
               placeholder="Ej. Transporte"
               value={gastoName}
               onChange={(e) => setGastoName(e.target.value)}
            />
            <label htmlFor="">Gasto semanal</label>
            <input
               type="number"
               className="u-full-width"
               placeholder="Eje. 500"
               value={cantidad}
               onChange={e => setCantidad(parseInt(e.target.value))}
            />
            <input
               type="submit"
               className="button-primary u-full-width"
               value="Agregar gasto"
            />
         </div>
      </form>
   )
}

export default Form;
