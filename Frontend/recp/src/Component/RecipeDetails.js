import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state;

  if (!recipe) {
    return <p className="error-message">Recipe not found.</p>;
  }

  return (
    <div className="recipe-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-details-img" />

      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
