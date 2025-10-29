import React from "react";
import PlantCard from "./PlantCard";

// PlantList receives the plants array (already filtered by PlantPage)
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        // PlantCard will render each plant item
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;