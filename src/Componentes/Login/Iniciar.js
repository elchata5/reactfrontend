import { useContext, useState } from "react"
import API from '../ConfigUrl'
import {useLocation} from 'wouter'
import loginContext from '../Context/loginContext'
function Login(){    

const [ , setLocation] = useLocation()
const {userLogin, setUserLogin} = useContext(loginContext)
const [datos, setDatos] = useState({
    Nombre:'',
    Pass:''
}
)

const handleSubmit = evt =>{
    evt.preventDefault()
    const nombre=datos.Nombre
    const pass= datos.Pass
    API.post('login', {nombre , pass } )
    .then(res=>{
        window.sessionStorage.setItem('userLogeado', JSON.stringify(res.data))
        setUserLogin(res.data)
    })
    .catch(error =>{
        window.sessionStorage.removeItem('userLogeado')
        alert('Le pifiaste')
    })

    setLocation('/')

}

const handleChange = evt =>{
    setDatos({
        ...datos,
        [evt.target.name] : (evt.target.value) 
    })
}

return (
    <form onSubmit={handleSubmit}>
        Nombre:
        <input type='text' name='Nombre' onChange={handleChange}  />
        Pass:
        <input type='text' name='Pass' onChange={handleChange}  />
        <button variant="primary" type="submit">
            Submit
          </button>
    </form>
)
}

export default Login