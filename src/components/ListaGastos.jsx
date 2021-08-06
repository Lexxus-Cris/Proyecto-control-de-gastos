import React from 'react';

import Gasto from './Gasto';

const ListaGastos = ({gastos}) => {
   return (
      <div className="gastos-realizados">
         <h2>Listado</h2>
         {gastos.map(gasto => (
            <Gasto
               key={gasto.id}
               gasto={gasto}
               // eliminarGasto={eliminarGasto}
            />
         ))}
      </div>
   )
}

export default ListaGastos
