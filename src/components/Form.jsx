import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Error from './Error';

const Form = ({guardarGasto, hacerGasto}) => {

   const [gastoName, setGastoName] = useState('');

   const [cantidad, setCantidad] = useState('');

   const [error, setError] = useState(false);

   const crearGasto = e => {
      e.preventDefault()

      // Validar 
      if (cantidad < 1 || gastoName.trim() === '' ) {
         setError(true);
         return;
      }

      setError(false)
         // Construir el gasto
      const gasto = {
         gastoName,
         cantidad,
         id: nanoid()
      }
      // Pasar el gasto al componente principal
      guardarGasto(gasto);
      hacerGasto(true);
      // resetear el form
      setGastoName('');
      setCantidad('');
   }

   return (
      <form
         onSubmit={crearGasto}
      >
         <h2>Agrega tus gastos</h2>
         {error === true 
            ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" />
            : null
         }
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
