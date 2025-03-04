/*import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.css';

const Favourites = ({ favourites }) => {
  return (
    <div className="favourites">
      <h2>Your Favorite Recipes</h2>
      <div className="favourite-list">
        {favourites.map((recipe) => (
          <div key={recipe.id} className="favourite-box">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.category}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Recipes</Link>
    </div>
  );
};

export default Favourites;*/

import React from "react";
import { useNavigate } from "react-router-dom";
import './Favourites.css';

const Favourites = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const removeFromFavourites = (id) => {
    const updatedFavourites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavourites); // Corrected variable name
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites)); // Update localStorage
  };

  return (
    <div className="favourites-container">
      <h2>Favourite Recipes</h2>
      <button onClick={() => navigate("/recipes")}>Back to Recipes</button>
      {favorites.length === 0 ? (
        <p>No favourite recipes yet.</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                onClick={() => navigate(`/recipe/${recipe.id}`, { state: recipe })}
              />
              <h3>{recipe.name}</h3>
              <button className="remove-btn" onClick={() => removeFromFavourites(recipe.id)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;


