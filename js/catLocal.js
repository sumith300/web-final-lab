window.onload = async () => {
    const container = document.getElementById("dog-list");

    // Fetch the JSON file
    try {
        const response = await fetch('./dogs.json');  // Path to your local JSON file
        const data = await response.json();

        // Iterate over each dog record
        data.forEach(dog => {
            // Create a container for each dog
            const dogDiv = document.createElement("div");
            dogDiv.classList.add("dog-container");

            // Create and add the dog name
            const dogName = document.createElement("h2");
            dogName.textContent = dog.name;
            dogDiv.appendChild(dogName);

            // Add temperament information
            const dogTemperament = document.createElement("p");
            dogTemperament.classList.add("dog-temperament");
            dogTemperament.textContent = `Temperament: ${dog.temperament}`;
            dogDiv.appendChild(dogTemperament);

            // Add origin information
            const dogOrigin = document.createElement("p");
            dogOrigin.classList.add("dog-origin");
            dogOrigin.textContent = `Origin: ${dog.origin}`;
            dogDiv.appendChild(dogOrigin);

            // Add description
            const dogDescription = document.createElement("p");
            dogDescription.classList.add("dog-description");
            dogDescription.textContent = dog.description;
            dogDiv.appendChild(dogDescription);

            // Append the dogDiv to the main container
            container.appendChild(dogDiv);
        });

    } catch (error) {
        console.error('Error fetching the dog data:', error);
    }
};
