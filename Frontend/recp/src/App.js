
import { Routes, Route } from "react-router-dom";  
import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AddRecipe from "./Component/AddRecipe";
import Login from "./Component/Login";
import Recipes from "./Component/Recipes";
import ShoppingList from "./Component/ShoppingList";
import Signup from "./Component/Signup";
import RecipeDetails from "./Component/RecipeDetails";
import AuthProvider  from "./Component/Auth"; // Import the AuthProvider
import Favourites from "./Component/Favourites"; 

import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];  
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AuthProvider>  {/* Wrap the entire app with AuthProvider */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes setFavorites={setFavorites} />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipeDetails" element={<RecipeDetails />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favourites" element={<Favourites favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
