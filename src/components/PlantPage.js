import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// Base URL for our json-server
const API = "http://localhost:6001/plants";

function PlantPage() {
  // plants: full list from backend
  const [plants, setPlants] = useState([]);
  // searchTerm: what user typed in the search input
  const [searchTerm, setSearchTerm] = useState("");

  // 1. fetch all plants when the page loads
  useEffect(() => {
    // this runs only once when component mounts
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((err) => {
        // small helpful log if something goes wrong
        console.error("Failed to fetch plants:", err);
      });
  }, []);

  // 2. handle adding a new plant (called from NewPlantForm)
  function handleAddPlant(newPlant) {
    // send to backend
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((createdPlant) => {
        // add to local state so UI updates immediately
        setPlants((prev) => [...prev, createdPlant]);
      })
      .catch((err) => {
        console.error("Error adding plant:", err);
      });
  }

  // 3. search handler (called from Search component)
  function handleSearch(term) {
    setSearchTerm(term);
  }

  // 4. compute filtered plants by name (case-insensitive)
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;