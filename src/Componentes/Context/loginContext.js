import React, { useState } from 'react'

const Context = React.createContext({})

export function UserLoginProvider({children}) {

    const [userLogin, setUserLogin] = useState(JSON.parse(window.sessionStorage.getItem('userLogeado')))

    return <Context.Provider value={{userLogin , setUserLogin}}>
        {children}
    </Context.Provider>

}
export default Context