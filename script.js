const hexInput = document.getElementById('hex-input');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const button = document.getElementById('convert-btn');
const rgbInput = document.getElementById('rgb-value');
const hexToRgb = (h) => {
    let r = 0, g = 0, b = 0;
  
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];

    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

button.addEventListener('click',() => {
    const hexValue = hexInput.value;
    rbgValue = hexToRgb(hexValue);
    body.style.backgroundColor = rbgValue;
    container.classList.add('active');
    rgbInput.value = rbgValue;
} )

