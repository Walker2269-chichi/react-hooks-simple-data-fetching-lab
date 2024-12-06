// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Even if an error occurs, stop loading
      });
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p> // Display loading text while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;
