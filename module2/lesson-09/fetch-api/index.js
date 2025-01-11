fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
    return data.map((rocket) => {
        const newDiv = document.createElement('div');
        const patchImage = rocket.links.patch.small;
        const imgElement = document.createElement("img");
    
        imgElement.setAttribute("src", patchImage);
        imgElement.setAttribute("width", 200);
        newDiv.innerHTML = `<h2>Rocket name: ${rocket.name}</h2><p>${rocket.details}</p>`
        newDiv.appendChild(imgElement)
        document.body.appendChild(newDiv)
    })
  })
  .catch( (err) => console.log(err));