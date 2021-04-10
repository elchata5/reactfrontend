import {MenuAdmin} from './Menus';
import {MenuInvitado} from './Menus';
import loginContext from './Context/loginContext'
import {MenuUser} from './Menus';
import {useContext, } from 'react';

export default function MenuLat(){
    // let logeado = JSON.parse(localStorage.getItem('inmoLogeada'))
    const {userLogin, } = useContext(loginContext)
  
    if (userLogin == null)
      return <MenuInvitado />
  
    else if (Number(userLogin.id) === 43) return <MenuAdmin />
    return <MenuUser />
    }