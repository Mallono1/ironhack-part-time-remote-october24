let theCatDiv = document.getElementById('cat'); 
let mouseElements = document.getElementsByClassName('mouse')
let mouseCopy = [...mouseElements]; // use spread operator
let allDivs = document.querySelectorAll('.mouse, #cat');

mouseCopy.forEach(mouseEl => mouseEl.innerHTML = 'Hi World :)')
document.querySelector('.mouse').innerHTML = 'Welcome to DOM Intro :)';
theCatDiv.innerText = 'Hi cats :)';
theCatDiv.style = 'color:grey; background:green;'
console.log('mouseElements', mouseElements)
console.log('allDivs', allDivs)
allDivs[0].className = 'redBg';