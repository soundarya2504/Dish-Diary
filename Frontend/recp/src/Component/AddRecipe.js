import React, { useState, useEffect } from "react";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [recipes, setRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  });

  
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const newRecipe = { title, ingredients, instructions };
    setRecipes([...recipes, newRecipe]);


    setTitle("");
    setIngredients("");
    setInstructions("");
  };


  const clearAll = () => {
    setTitle("");
    setIngredients("");
    setInstructions("");
    setRecipes([]); // Clears saved recipes
    localStorage.removeItem("recipes"); 

  
    setTimeout(() => {
      document.getElementById("recipe-title").focus();
    }, 0);
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="recipe-title"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />

        <textarea
          placeholder="Ingredients (e.g., 2 eggs, 1 cup flour...)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="textarea-field"
        ></textarea>
        <small>{ingredients.length} / 300 characters</small>

        <textarea
          placeholder="Instructions (Step-by-step guide...)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="textarea-field"
        ></textarea>
        <small>{instructions.length} / 500 characters</small>

        <div className="button-group">
          <button type="submit" className="add-btn">Add Recipe</button>
          <button type="button" onClick={clearAll} className="clear-btn">Clear All</button>
        </div>
      </form>

      {recipes.length > 0 && (
        <div className="recipe-list">
          <h3>Saved Recipes</h3>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index} className="recipe-item">
                <strong>{recipe.title}</strong>
                <p><b>Ingredients:</b> {recipe.ingredients}</p>
                <p><b>Instructions:</b> {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddRecipe;
