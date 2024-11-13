function createTitle(){
    const containerElement = document.getElementById('container');
    const headingElement = document.createElement('h1')
    headingElement.innerHTML = '<u>Welcome to <i>DOM Manipulation</i> day :)</u>'
    containerElement.appendChild(headingElement);
}

function removeTitle(){
    const containerElement = document.getElementById('container');
    const h1Element = document.querySelector('h1');
    containerElement.removeChild(h1Element);
}

function createCat(){
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'https://cataas.com/cat')
    imgElement.setAttribute('width', '100px')
    imgElement.setAttribute('height', '100px')
    imgElement.setAttribute('class', 'circular')
    document.getElementById('container').appendChild(imgElement)
}

const buttonElement = document.querySelector('button');
buttonElement.innerText = 'Create a new heading';
buttonElement.addEventListener('click', function(){
    createTitle()
})

// buttonElement.addEventListener('mouseenter', function(){
//     alert('Hi :)|')
// })

document.getElementById('delete-button').addEventListener('click', function(){
    removeTitle();
})

document.querySelector('#addCat').addEventListener('click', function(){
    createCat()
})