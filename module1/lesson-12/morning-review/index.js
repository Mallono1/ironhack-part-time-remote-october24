// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Changes the color of the background using STYLE
  function changeBackgroundColor() {
    var colorBg =   document.getElementById("hero-section")
    colorBg.style.backgroundColor = generateRandomColor();
  }
  
  function changeBackgroundText() {
    var textBg = document.getElementById("hero-section")
    if (textBg.innerHTML == `<h1 class="teko-400">WORK</h1>`) {
      textBg.innerHTML = `<h1 class="teko-400">OR</h1>`   
    } else if (textBg.innerHTML == `<h1 class="teko-400">OR</h1>` ) {
      textBg.innerHTML = `<h1 class="teko-400">DIE</h1>`  
    } else if (textBg.innerHTML == `<h1 class="teko-400">DIE</h1>` ) {
      textBg.innerHTML = `<h1 class="teko-400">WORK</h1>`  
    };
  }
  
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  // Run this function every 300ms
  setInterval(changeBackground, 300);