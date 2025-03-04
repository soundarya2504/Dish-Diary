import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> Digital Dish Diary</div>
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-item" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/recipes" className="nav-item" activeclassname="active">Recipes</NavLink></li>
        <li><NavLink to="/add-recipe" className="nav-item" activeclassname="active"> AddRecipe</NavLink></li>
        <li><NavLink to="/shopping-list" className="nav-item" activeclassname="active"> Shopping List</NavLink></li>
        <li><NavLink to="/favourites" className="nav-item" activeclassname="active"> Favourites</NavLink></li>
        <li><NavLink to="/Login" className="nav-item" activeclassname="active"> Login</NavLink></li>
        <li><NavLink to="/signup" className="nav-item" activeclassname="active"> Signup</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
