window.onload = async () => {
    const container = document.getElementById("cat-list");

    // Fetch the JSON file from the raw GitHub URL
    try {
        const response = await fetch('./dogs.json'); // Update the JSON file URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Iterate over each cat record
        data.forEach(cat => {
            // Create a container for each cat
            const catDiv = document.createElement("div");
            catDiv.classList.add("cat-container");

            // Create and add the image
            const catImage = document.createElement("img");
            catImage.classList.add("cat-image");
            catImage.src = cat.image_url; // Set the image URL
            catImage.alt = `Image of ${cat.name}`;
            catDiv.appendChild(catImage);

            // Create and add the cat name
            const catName = document.createElement("h2");
            catName.textContent = cat.name;
            catDiv.appendChild(catName);

            // Add temperament information
            const catTemperament = document.createElement("p");
            catTemperament.classList.add("cat-temperament");
            catTemperament.textContent = `Temperament: ${cat.temperament}`;
            catDiv.appendChild(catTemperament);

            // Add origin information
            const catOrigin = document.createElement("p");
            catOrigin.classList.add("cat-origin");
            catOrigin.textContent = `Origin: ${cat.origin}`;
            catDiv.appendChild(catOrigin);

            // Add description
            const catDescription = document.createElement("p");
            catDescription.classList.add("cat-description");
            catDescription.textContent = cat.description;
            catDiv.appendChild(catDescription);

            // Append the catDiv to the main container
            container.appendChild(catDiv);
        });

    } catch (error) {
        console.error('Error fetching the cat data:', error);
    }
};
