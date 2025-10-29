import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // create new plant object
    const newPlant = {
      name,
      image,
      price, // keep as string to pass tests
    };

    // send POST request
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON", // exactly as expected by test
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((createdPlant) => {
        onAddPlant(createdPlant); // update state in PlantPage
        // reset form after submit
        setName("");
        setImage("");
        setPrice("");
      })
      .catch((err) => {
        console.error("Error adding plant:", err);
      });
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;