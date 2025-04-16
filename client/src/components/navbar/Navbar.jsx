import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { AuthoContext } from "../../stores/auth";
import { useContext } from "react";
const Navbar = () => {
  const { isLoggedIn } = useContext(AuthoContext);
  // console.log("isloggedin data in navbar",isLoggedIn);

  return (
    <>
      <div className={style.container}>
        <div className="logo-brand">
          <NavLink to="/">Admin</NavLink>
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
            <NavLink to="/service">Service</NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/resister">Register</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
