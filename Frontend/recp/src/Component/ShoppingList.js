import React, { useState, useEffect } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  // Load saved items from localStorage or default to an empty array
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState("");

  // Save items to localStorage when the list updates
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  // Add a new item to the list
  const addItem = () => {
    if (!newItem.trim() || !quantity.trim()) {
      alert("Please enter both item name and quantity! 🛒");
      return;
    }
    setItems([...items, { name: newItem, quantity }]);
    setNewItem("");
    setQuantity("");
  };

  // Remove an item from the list
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Clear the entire shopping list
  const clearList = () => {
    if (items.length === 0) return;
    if (window.confirm("Are you sure you want to clear the entire shopping list? 🗑")) {
      setItems([]);
    }
  };

  return (
    <div className="shopping-container">
      <h2> Shopping List</h2>

      {/* Input Section */}
      <div className="input-group">
        <input
          type="text"
          placeholder=" Item Name..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder=" Quantity..."
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-field"
        />
        <button onClick={addItem} className="add-btn">Add</button>
      </div>

      {/* Shopping List */}
      {items.length > 0 ? (
        <ul className="shopping-list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              <span> {item.name} - {item.quantity}</span>
              <button onClick={() => removeItem(index)} className="remove-btn"></button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">Your shopping list is empty. </p>
      )}

      {/* Clear List Button */}
      {items.length > 0 && (
        <button onClick={clearList} className="clear-btn">🗑 Clear List</button>
      )}
    </div>
  );
};

export default ShoppingList;
