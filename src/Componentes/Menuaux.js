import React from "react";
import { Link } from "wouter";
import { MenuUser, MenuAdmin, MenuInvitado } from "./Menus";
import loginContext from './Context/loginContext'
import {useContext, } from 'react';

export default function Menuaux(props) {

    const {userLogin,  } = useContext(loginContext)

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="Admin Inmobiliaria"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">{props.titulo}</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        {(userLogin) ?
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {userLogin.nombre}
            </a>


          </div>
          
        </div> :<div></div> } 

        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">

        { (userLogin == null) ?
            <MenuInvitado /> : 
            ((Number(userLogin.id) === 43) ? <MenuAdmin />
            : <MenuUser />)
        }

        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
