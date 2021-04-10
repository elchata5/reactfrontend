import {Link} from 'wouter'
import React, { useContext} from 'react'
import loginContext from './Context/loginContext'

export default function Sesion(){

    const {userLogin, setUserLogin} = useContext(loginContext)

    const desloguear = evt=> {
        window.sessionStorage.removeItem('userLogeado')
        setUserLogin(null) 
    }
    

    return (
            <div class="navbar-nav ml-auto">
            {!Boolean(userLogin) ? 
            <Link className="btn btn-outline-primary rounded-pill shadow-sm px-4 mb-4" to='/login'>Iniciar sesion</Link>:
                
            <button className="btn btn-outline-danger rounded-pill shadow-sm px-4 mb-4" onClick= {()=> desloguear()}>Cerrar sesion</button> 
                   
            }
        </div>
    )
}