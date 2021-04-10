import {  useContext, useEffect, useState } from "react"
import { useLocation, Link } from "wouter";
import API from '../ConfigUrl'
import './Inmobiliarias.css'
import loginContext from '../Context/loginContext'


export default function Inmobs(){
    const [inmobs, setInmobs] = useState([]);
    const {userLogin, } = useContext(loginContext)
    const [ , setLocation] = useLocation();
 
    useEffect(()=> {
        if ( !Boolean(userLogin) || Number(userLogin.id) !== 43) {
            setLocation('/login')
        }
        API.get('inmobiliarias')
        .then(res=>{
            setInmobs(res.data)
        })
    },[userLogin, setLocation])

    const eliminarInmob = (inmo) => {
        API.delete(`/inmobiliaria/delete/${inmo.id}`)
        .then (res =>{
            alert(` Acaba de eliminar a ${inmo.nombre} `)
            var arrayaux = inmobs.filter((i) => i !== inmo)
            setInmobs(arrayaux)
        })
    } 

    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha de vencimiento</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {inmobs.map((inmo)=>
                    <tr>
                        <td>{inmo.nombre}</td>
                        <td>{inmo.ultimoPago}</td>
                        <td><Link className="btn btn-info" to={`/inmob/new/${inmo.id}`}  >Editar</Link>
                <Link to={`/inmob/pago/${inmo.id}`} className="btn btn-success"  >Generar Pago</Link>
                <button onClick={()=>eliminarInmob(inmo)} className="btn btn-danger" >Elminar </button></td>
                    </tr>              
            )}
                </tbody>
            </table>
            <Link to='/inmob/new/0' className="btn btn-block btn-warning btn-lg">Crear nueva Inmobiliaria</Link>
            </div>
    )
}