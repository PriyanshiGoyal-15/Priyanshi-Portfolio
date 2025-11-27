import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand mx-5 py-1 my-2">PG</h3>
          <nav className="nav nav-masthead justify-content-center ">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link" to="/skills">
              Skills
            </NavLink>

            <NavLink className="nav-link" to="/experience">
              Experience
            </NavLink>

            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>

            <NavLink className="nav-link" to="/contactUs">
              Contact Me
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
