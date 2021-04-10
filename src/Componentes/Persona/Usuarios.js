import React, {useState, useEffect, useContext} from 'react' ;
import API from '../ConfigUrl'
import {Link} from 'wouter'
import loginContext from '../Context/loginContext'

export default function Usuarios() {
    const [users, setUsers] = useState([]);
    const {userLogin, } = useContext(loginContext)


    useEffect(()=> {
        API.get(`personas/${userLogin.id}`)
        .then(res=>{
            setUsers(res.data)
        })
    },[])

    const eliminarPersona = (user) => {
        API.delete(`/persona/delete/${user.id}`)
        .then (res =>{
            alert(` Acaba de eliminar a ${user.nombre} `)
            var arrayaux = users.filter((i) => i !== user)
            setUsers(arrayaux)
        }).catch(error=>{
            console.log(error)
        })
    } 

    return (

        <div>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">DNI</th>
                <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user)=>
                <tr>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.dni}</td>
                    <td>
                        <Link className="btn btn-info" to={`/persona/new/${user.id}`}  >Editar</Link>
                        <button onClick={()=>eliminarPersona(user)} className="btn btn-danger" >Elminar </button>
                        </td>
                </tr>              
        )}
            </tbody>
        </table>
        <Link to='/persona/new/0' className="btn btn-block btn-warning btn-lg">Crear nueva Persona</Link>
        </div>
    )
}