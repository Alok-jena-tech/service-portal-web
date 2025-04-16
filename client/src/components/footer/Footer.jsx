import React from 'react'
import style from "./footer.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
       <div className={style.container}>
        <div className="logo-brand">
          <NavLink  to="/admin">Admin</NavLink>
        </div>
        <div className={style.navSide}>
          
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/resister">Signup</NavLink>
            </li>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
