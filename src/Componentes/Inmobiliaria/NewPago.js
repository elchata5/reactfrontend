import React, { useState } from 'react'
import API from '../ConfigUrl'

export default function Pago (prop){

    const [fechaInicio,setFechaInicio] = useState()
    const [fechaFin,setFechaFin] = useState()
    const [monto,setMonto] = useState()
    const {idProp} = prop.params

    const handleSubmit = (even) =>{
        even.preventDefault()
        const aux = {
            inmobiliaria: {
              id : idProp
            },
            fechaPago: fechaInicio,
            fechaFin: fechaFin,
            monto: monto
          }
          API.post('pago/save', aux )
    .then(res => {
      alert("Pago creado con exito");  
    })
    .catch(error =>{
        console.log(error)
    })

    }
    

    return (
        <div>
            <h3>Generar Pago de cuota de servicio</h3>
            <form onSubmit={handleSubmit}>
                Fecha 1: <input type="date" name="fechaInicio" onChange={(e)=>setFechaInicio (e.target.value)} value={fechaInicio}></input>
                Fecha 2:<input type="date" name="fechaFin" onChange={(e)=> setFechaFin (e.target.value)} value={fechaFin}></input>
                Monto: <input type="number" name="monto" onChange={(e)=>setMonto (e.target.value)}></input>
            </form>
        </div>
    )
}