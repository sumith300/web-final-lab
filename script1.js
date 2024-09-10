window.onload = async () => {
    // Fetch a random cat image on window load
    await fetch("https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_g0oqv7YRpqFjdk5XZ8S9AmyVmzsaEf7KB6lz42cJSha05NMW9U2ivHqln4FQ0fy9")
    .then(response => response.json())
    .then(data => {
        let catImg = document.createElement("img");
        catImg.src = data[0].url;
        catImg.style.width = "100%";
        catImg.style.height = "200px";
        catImg.style.objectFit = "cover"; // Maintain aspect ratio and fill the box
        catImg.style.borderRadius = "8px";
        catImg.style.marginBottom = "20px";
        catImg.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.6)";
        document.getElementById("container").appendChild(catImg);
    })
    .catch(error => console.error('Error fetching cat image on load:', error));
}

document.getElementById("dogButton").addEventListener('click', async () => {
    // Clear the container before fetching a new cat image
    document.getElementById("container").innerHTML = null;
    
    await fetch("https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_g0oqv7YRpqFjdk5XZ8S9AmyVmzsaEf7KB6lz42cJSha05NMW9U2ivHqln4FQ0fy9")
    .then(response => response.json())
    .then(data => {
        let catImg = document.createElement("img");
        catImg.src = data[0].url;
        catImg.style.width = "100%";
        catImg.style.height = "200px";
        catImg.style.objectFit = "cover"; // Maintain aspect ratio and fill the box
        catImg.style.borderRadius = "8px";
        catImg.style.marginBottom = "20px";
        catImg.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.6)";
        document.getElementById("container").appendChild(catImg);
    })
    .catch(error => console.error('Error fetching cat image on button click:', error));
});
