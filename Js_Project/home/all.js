// Get the color input element
const colorInput = document.getElementById("colorInput");

// Add an event listener to change background color when color input changes
colorInput.addEventListener('input', function() {
    let color = colorInput.value; // Get the selected color value
    document.getElementById("body").style.background = color; // Set the body's background color
});

// Add an event listener to change font style when the dropdown selection changes
document.getElementById("fontStyle").addEventListener('change', function() {
    var fontFamily = document.getElementById("fontStyle").value; // Get the selected font value
    switch (fontFamily) {
        case "font1": {
            document.getElementById("body").style.fontFamily = "'Courier New', Courier, monospace"; 
        }
        break;
        case "font2": {
            document.getElementById("body").style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"; 
        }
        break;
        case "font3": {
            document.getElementById("body").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"; 
        }
        break;
        case "font4": {
            document.getElementById("body").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"; 
        }
        break;
    }
});
