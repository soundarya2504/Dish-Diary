import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipes.css";

const sampleRecipes = [
  {
    id: 1,
    name: "Pasta Carbonara",
    category: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETqZMJiKmCsEGyR50jYpSqNQSMdQzCh7C5A&s",
    cookingTime: "30 minutes",
    ingredients: ["200g Pasta", "100g Bacon", "2 Eggs", "50g Parmesan Cheese", "Salt & Pepper"],
    steps: [
      "Boil the pasta until al dente.",
      "Cook bacon in a pan until crispy.",
      "Whisk eggs with parmesan cheese.",
      "Mix everything together with pasta.",
      "Serve hot with extra cheese on top."
    ]
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5MrKrQXYBuX-7DSDyZzU5fvTEQj89HbZdA&s",
    cookingTime: "1 hour",
    ingredients: ["2 cups Basmati Rice", "500g Chicken", "1 Onion", "2 Tomatoes", "Spices"],
    steps: [
      "Marinate the chicken with spices.",
      "Cook onions and tomatoes until soft.",
      "Add chicken and let it cook.",
      "Mix with cooked rice and let it steam.",
      "Serve hot with raita."
    ]
  },
  { 
    id: 3, 
    name: "Ice Cream", 
    category: "Dessert", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstWOBLgzy_nmLMFxAoPa0lEORzWi6hxZbeA&s",
    cookingTime: "Preparation Time: 10 minutes, Freezing Time: 4-6 hours, Chilling Time: 2-3 hours",
    ingredients: ["2 cups heavy cream", "1 cup whole milk", "¾ cup sugar", "2 tsp pure vanilla extract", "1 pinch salt"],
    steps: [
      "In a bowl, whisk heavy cream, whole milk, sugar, salt, and vanilla extract until the sugar dissolves completely.",
      "Cover the bowl and refrigerate for at least 2 hours (or overnight for better flavor).",
      "Pour the chilled mixture into an ice cream maker and churn it as per the manufacturer’s instructions (usually 20-30 minutes).",
      "Transfer the churned ice cream into an airtight container and freeze for at least 4 hours until firm.",
      "Scoop out the creamy vanilla ice cream and serve it plain or with toppings like chocolate syrup, nuts, or fruits."
    ]
  },
  { 
    id: 4, 
    name: "Corn Salad", 
    category: "Salad", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowa7UXHCIEbj09zujqxMvOcVbwwKP1n18vw&s",
    cookingTime: "Prep Time: 10 minutes",
    ingredients: [
      "2 cups sweet corn (boiled or canned)", "½ cup cherry tomatoes (chopped)",
      "½ cup cucumber (chopped)", "¼ cup red onion (finely chopped)", 
      "¼ cup bell pepper (any color, chopped)", "2 tbsp fresh cilantro (chopped)",
      "1 tbsp olive oil", "1 tbsp lemon juice (or vinegar)", "½ tsp salt",
      "½ tsp black pepper", "½ tsp chili flakes (optional)"
    ],
    steps: [
      "If using fresh corn, boil for 5 minutes, drain, and let it cool.",
      "Dice the cherry tomatoes, cucumber, bell pepper, and onion into small pieces.",
      "In a large bowl, combine the corn, chopped vegetables, and fresh cilantro.",
      "Add olive oil, lemon juice, salt, black pepper, and chili flakes.",
      "Mix well to coat everything evenly.",
      "Serve immediately or refrigerate for 15-30 minutes for better flavor."
    ]
  },
  { 
    id: 5, 
    name: "Chocolate Delight", 
    category: "Dessert", 
    image: "https://www.southernliving.com/thmb/1Z7ogPGtQPKgUFQna23Xc0IzEBM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2665601_ErinN_0213-2000-7b88f1a2e1bd40bba7070fc01476cf3d-484ae9dad9cd490f9c4b749ed55e995a.jpg",
    cookingTime: "Preparation Time: 15 minutes,Cooking Time: 10 minutes,Chilling Time: 2-4 hours,Total Time: ~2 hours 30 minutes",
    ingredients: [
      "1 ½ cups crushed chocolate cookies or graham crackers",
      "¼ cup melted butter", 
      "1 (8 oz) package cream cheese, softened",
      "1 tbsp olive oil", "1 tbsp lemon juice (or vinegar)", "½ tsp salt",
      "½ tsp black pepper", "½ tsp chili flakes (optional)"
    ],
    steps: [
      "If using fresh corn, boil for 5 minutes, drain, and let it cool.",
      "Dice the cherry tomatoes, cucumber, bell pepper, and onion into small pieces.",
      "In a large bowl, combine the corn, chopped vegetables, and fresh cilantro.",
      "Add olive oil, lemon juice, salt, black pepper, and chili flakes.",
      "Mix well to coat everything evenly.",
      "Serve immediately or refrigerate for 15-30 minutes for better flavor."
    ]
  }
];

const Recipes = ({ setFavorites }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // ✅ Store in localStorage
      return updatedFavorites;
    });
  };

  const filteredRecipes = sampleRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipes-container">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search recipes..."
        />
      </div>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image || "https://via.placeholder.com/150"}
              alt={recipe.name}
              onClick={() => navigate(`/recipe/${recipe.id}`, { state: recipe })}
            />
            <h3>{recipe.name}</h3>
            <p>{recipe.category}</p>
            <button className="favorite-btn" onClick={() => addToFavorites(recipe)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;


