import Usuarios from "./Componentes/Persona/Usuarios";
import Inmobiliarias from "./Componentes/Inmobiliaria/Inmobiliarias";
import Inmobiliaria from "./Componentes/Inmobiliaria/NewInmob";
import Inmuebles from "./Componentes/Inmueble/Inmuebles";
import Inmueble from "./Componentes/Inmueble/NewInmueble";
import Persona from "./Componentes/Persona/NewPersona";
import Pago from "./Componentes/Inmobiliaria/NewPago";
import Sesion from "./Componentes/Sesion";
import Menuaux from "./Componentes/Menuaux";
import Login from "./Componentes/Login/Iniciar";
import Footer from "./Componentes/Footer";
import Home from "./Componentes/Home";
import { UserLoginProvider } from "./Componentes/Context/loginContext";
// import "./App.css";

import { Route } from "wouter";

function App() {
  const titulo='Admin Inmobiliaria'
  return (
    <UserLoginProvider>
      <div className="wrapper">
          <div className="main-header navbar navbar-expand navbar-white navbar-light">
            <Sesion />
          </div>
        {/* <div className="row"> */}
          <div className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <div className="vertical-nav bg-white" id="sidebar"> */}
              <Menuaux titulo={titulo}/>
            {/* </div> */}
          </div>
          {/* <div className="col-sm-9"> */}
            <div className="content-wrapper">
              <div className="container-fluid">
              <Route component={Usuarios} path="/users" />
              <Route component={Inmobiliarias} path="/inmobs" />
              <Route component={Inmobiliaria} path="/inmob/new/:idInmob" />
              <Route component={Inmuebles} path="/inmuebles" />
              <Route component={Inmueble} path="/inmueble/new/:idInmu" />
              <Route component={Persona} path="/persona/new/:idPersona" />
              <Route component={Pago} path="/inmob/pago/:idProp" />
              <Route component={Login} path="/login" />
              <Route component={Home} exact path="/" />
            </div>
            </div>
          {/* </div> */}
        {/* </div> */}
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </UserLoginProvider>
  );
}

export default App;
