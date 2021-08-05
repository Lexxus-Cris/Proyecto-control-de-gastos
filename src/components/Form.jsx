import React, { useState } from 'react'

const Form = () => {


   return (
      <form
         // onChange={}
      >
         <h2>Agrega tus gastos</h2>

         <div className="campo">
            <label>Nombre del gasto</label>
            <input
               type="text"
               className="u-full-width"
               placeholder="Ej. Transporte"
            />
            <label htmlFor="">Gasto semanal</label>
            <input
               type="number"
               className="u-full-width"
               placeholder="Eje. 500"
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
