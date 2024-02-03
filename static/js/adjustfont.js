function adjustFontSize() {
    var container = document.querySelector('.background-container');
    var height = container.offsetHeight; // Get the container height
    var fontSize = height / 20; // Example calculation
    container.style.fontSize = fontSize + 'px'; // Set the font size
}

// Run on load and window resize
window.onload = adjustFontSize;
window.onresize = adjustFontSize;