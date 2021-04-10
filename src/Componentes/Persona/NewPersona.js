import API from '../ConfigUrl'
import {useState, useEffect, useContext} from "react";
import { useLocation } from 'wouter';
import loginContext from '../Context/loginContext'

export default function NewPersona(prop){
    const [, setLocation] = useLocation()
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [auxEditar, setAuxEditar] = useState(null)
    const {idPersona} = prop.params
    const {userLogin, } = useContext(loginContext)

    useEffect(()=>{
      if ( !Boolean(userLogin) ) {
        setLocation('/login')
    }
      if(Number(idPersona) !== 0) {
        API.get('persona/'+ idPersona )
        .then((res)=>{
          if (Number(res.status) === 200 ) {
            setNombre(res.data.nombre)
            setApellido(res.data.apellido)
            setDni(res.data.dni)
            setAuxEditar(res.data)
          }
        
      }).catch((error)=> {
        setLocation('/')
      })
    }

    },[idPersona, setLocation, userLogin])
    
    const handleSubmit = evt =>{
        evt.preventDefault()
        var aux
        if (auxEditar) {
            aux = {
                inmobiliaria: {
                  id : userLogin.id
                },
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                id:auxEditar.id
              }
        }
        else{
            aux = {
                inmobiliaria: {
                  id : userLogin.id
                },
                nombre: nombre,
                apellido: apellido,
                dni: dni
              };
            }
        console.log(aux)
        API.post('persona/save', aux)
        .then(res=> {
          alert("Persona creada con exito");  
      })
      .catch(e=>{
          alert("Ya hay alguien con ese documento");  
      })
      setLocation('/users')
  }    

    return(
          <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">
            { (Number(idPersona) === 0) ? "Nueva Persona" : "Editar Persona" }
              </h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre </label>
                <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Ingresa Nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Apellido </label>
                <input type="text" name="apellido" className="form-control" value={apellido} onChange={(e)=>setApellido(e.target.value)} placeholder="Ingresa Apellido" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">DNI</label>
                <input type="number" name="dni" className="form-control" value={dni} onChange={(e)=>setDni(e.target.value)} placeholder="DNI" />
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button type="submit" className="btn btn-primary btn-block">Enviar</button>
            </div>
          </form>
        </div>   
    )
}