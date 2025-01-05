function changeBorderColor() {
    const borderElement = document.querySelector('.border');
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;
    borderElement.style.borderColor = randomColor;
}

setInterval(changeBorderColor, 1000);
