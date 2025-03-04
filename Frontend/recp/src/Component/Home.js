import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Digital Dish Diary</h1>
      <p> Personal recipe manager and meal planner.</p>

      <div className="home-buttons">
        <Link to="/recipes" className="btn">View Recipes</Link>
        <Link to="/add-recipe" className="btn">Add Recipe</Link>
        <Link to="/shopping-list" className="btn"> Shopping List</Link>
      </div>
    </div>
  );
};

export default Home;
