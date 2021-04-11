import API from '../ConfigUrl'
import {useState, useEffect, useContext} from "react";
import { useLocation } from 'wouter';
import loginContext from '../Context/loginContext'

export default function NewInmbiliaria(prop){
    const [, setLocation] = useLocation()
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [idEditar, setId] = useState(null)
    const {idInmob} = prop.params
    const {userLogin, } = useContext(loginContext)

    useEffect(()=>{
      if ( !Boolean(userLogin) || Number(userLogin.id) !== 43) {
        setLocation('/login')
    }
      if(Number(idInmob) !== 0) {
        API.get('inmobiliaria/'+ idInmob )
        .then((res)=>{
          if (Number(res.status) === 200 ) {
            setNombre(res.data.nombre)
            setPassword(res.data.pass)
            setPassword2(res.data.pass)
            setId(res.data)
          }
        
      }).catch((error)=> {
        setLocation('/')
      })
    }

    },[idInmob, setLocation, userLogin])
    
    const handleSubmit = evt =>{
        evt.preventDefault()
        if (password === password2) {
        if (idEditar) {
          var aux = idEditar
          aux.nombre = nombre
          aux.pass = password
          console.log(aux)
          API.post('inmobiliaria/save', aux).then(res=> {
            alert("Inmobiliaria editada con exito");  
          })
          .catch(error =>{
          console.log(error)
          })} 
        else{
          console.log(password)
          API.post('inmobiliaria/save', {nombre , pass:password })
            .then(res=> {
              alert("Inmobiliaria creada con exito");  
            })
            .catch(error =>{
            console.log('entro por el error')
            })} 
      setLocation('/inmobs')
    }else alert('No son iguales el pasword y la confirmacion')
  }    

    return(
        // <div>
        //   { (Number(idProp) === 0) ?  (<h2>Nueva inmobiliaria</h2> ) :(<h2>Editar inmobiliaria</h2>) }
        //   <form onSubmit={handleSubmit}>
        //       Nombre:
        //       <input type="text" name="nombre"   aria-required="true" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="....Nombre" />
        //       <br></br>Contraseña:
        //       <input type="password" name="password"   aria-required="true" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=".....Contraseña" />
        //       <br></br>Confirmar Contraseña:
        //       <input type="password" name="password2" value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder=".....confirmar contraseña" />
        //       <br></br><button variant="primary" type="submit">
        //       Enviar
        //     </button>
        //   </form>
        //   </div>            

        <div className="card card-info">
  <div className="card-header">
    <h3 className="card-title">
    { (Number(idInmob) === 0) ? "Nueva inmobiliaria" : "Editar inmobiliaria" }
      </h3>
  </div>
  {/* /.card-header */}
  {/* form start */}
  <form onSubmit={handleSubmit}>
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Nombre Inmobiliaria</label>
        <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Ingresa Nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <input type="password" name="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Repetir Contraseña</label>
        <input type="password" name="password2" className="form-control" value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder="Password" />
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