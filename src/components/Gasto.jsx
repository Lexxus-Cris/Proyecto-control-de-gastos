import React from 'react'

const Gasto = ({gasto}) => (
   <li className="gastos">
      <p>
         {gasto.gastoName}
         <span className="gasto">$ {gasto.cantidad}</span>
      </p>
   </li>
)

export default Gasto
