import React, {useState, useEffect, useContext} from 'react' ;
import API from '../ConfigUrl'
import {Link} from 'wouter'
import loginContext from '../Context/loginContext'

export default function Usuarios() {
    const [inmuebles, setInmuebles] = useState([]);
    const {userLogin, } = useContext(loginContext)


    useEffect(()=> {
        API.get("/inmuebles")
        .then(res=>{
            setInmuebles(res.data)
        })
    },[userLogin.id])

    const eliminarInmueble = (inmu) => {
        API.delete(`/inmueble/delete/${inmu.id}`)
        .then (res =>{
            alert(` Acaba de eliminar a ${inmu.nombre} `)
            var arrayaux = inmuebles.filter((i) => i !== inmu)
            setInmuebles(arrayaux)
        }).catch(error=>{
            console.log(error)
        })
    } 

    return (
<       div>

        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Direccion</th>
                <th scope="col">N°</th>
                <th scope="col">Inmobiliaria</th>
                <th scope="col">Propietario</th>
                <th scope="col">Inquilino</th>
                <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
            {inmuebles.map((inmu)=>
                <tr>
                    <td>{inmu.direccion}</td>
                    <td>{inmu.numero}</td>
                    <td>{inmu.propietario.nombre}</td>
                    <td>{inmu.inquilino.nombre}</td>
                    <td>
                        <Link className="btn btn-info" to={`/inmueble/new/${inmu.id}`}  >Editar</Link>
                        <button onClick={()=>eliminarInmueble(inmu)} className="btn btn-danger" >Elminar </button>
                        </td>
                </tr>              
        )}
            </tbody>
        </table>
        <Link to='/inmueble/new/0' className="btn btn-block btn-warning btn-lg">Crear nuevo Inmueble</Link>
        </div>
    )
}