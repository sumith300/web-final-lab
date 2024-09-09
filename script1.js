window.onload = async () => {
    //let dogButton = document.getElementById("dogButton");
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        let dogimg = document.createElement("img");
        dogimg.src = data.message;
        document.getElementById("container").appendChild(dogimg);
    })
    .catch(error => console.error('Error fetching dog image:', error));
}

dogButton.addEventListener('click', async()=>{
    document.getElementById("container").innerHTML=null
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then( response =>  response.json())
    .then(data => {
        let dogimg = document.createElement("img");
    dogimg.src = data.message;
       
        document.getElementById("container").appendChild(dogimg);
    })
    .catch(error => console.error('Error fetching dog image:', error));

})
