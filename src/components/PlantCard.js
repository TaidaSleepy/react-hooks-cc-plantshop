import React, { useState } from "react";

// PlantCard shows a single plant and allows marking sold out (local state)
function PlantCard({ plant }) {
  // inStock is local UI state only (not persisted)
  const [inStock, setInStock] = useState(true);

  function handleToggleStock() {
    // toggle the inStock boolean
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      {/* show the plant image and use the plant name as alt */}
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* price shown with a dollar sign so it's clear */}
      <p>Price: {plant.price}</p>

      {/* button changes text and class depending on inStock */}
      {inStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;