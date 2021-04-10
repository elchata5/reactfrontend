import { Link } from "wouter";

export function MenuAdmin() {
  return (
    <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Inmobiliarias
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/inmob/new/0"className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Nueva Inmobiliaria</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/inmobs" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ver todas</p>
                  </Link>
                </li>
              </ul>
            </li>         
          </ul>
  );
}

export function MenuUser() {
  return (
    <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Personas
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/persona/new/0" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Nueva Persona</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ver todas</p>
                  </Link>
                </li>
              </ul>
            </li>      
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Inmuebles
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/inmueble/new/0"  className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Nuevo Inmueble</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/inmuebles" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ver todos</p>
                  </Link>
                </li>
              </ul>
            </li>         
           
          </ul>
  );
}

export function MenuInvitado() {
  return (
    <nav>
      <ul className="nav flex-column bg-white mb-0">
      </ul>
    </nav>
  );
}
