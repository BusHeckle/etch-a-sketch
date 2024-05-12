//create a container div
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

//Add input for width and height

const dimensions = document.createElement("div");
dimensions.setAttribute("id", "dimensions");
    document.body.prepend(dimensions);

const gridWidthInput = document.createElement("input");
    gridWidthInput.setAttribute("id", "gridWidthInput");
    gridWidthInput.setAttribute("type", "text");
    gridWidthInput.setAttribute("value", "16");
    dimensions.appendChild(gridWidthInput);

    const gridHeightInput = document.createElement("input");
    gridHeightInput.setAttribute("id", "gridWidthInput");
    gridHeightInput.setAttribute("type", "text");
    gridHeightInput.setAttribute("value", "16");
    dimensions.appendChild(gridHeightInput);

    const redrawBtn = document.createElement("button");
    redrawBtn.setAttribute("id", "redrawBtn");
    dimensions.appendChild(redrawBtn);
    redrawBtn.textContent = "Redraw";


//create a grid of divs for boxes
function drawGrid(width, height){
    for (let i=0; i <= height*width; i++){
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("id", "gridDiv" + (i +1) );
        gridDiv.setAttribute("class", "gridDiv");
        container.appendChild(gridDiv);
    }
}


document.addEventListener("DOMContentLoaded", function() {
// Get the reset button by its ID
const redrawButton = document.getElementById('redrawBtn');



// Add click event listener to the reset button
redrawButton.addEventListener('click', function() {
    //get width and height from user input
let userWidthInput = document.getElementById("gridWidthInput").value;
let userHeightInput = document.getElementById("gridHeightInput").value;
drawGrid(userWidthInput,userHeightInput);
});
});


// 
// drawGrid(userWidthInput, userHeightInput);



//add class .yellow when hovering over a grid box
document.addEventListener("DOMContentLoaded", function() {
    // Select all divs with the class 'gridDiv'
    const gridDivs = document.querySelectorAll('.gridDiv');

    // Add a mouseover event to each div
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', function() {
            // Add the 'yellow' class to the div the mouse is over
            this.classList.add('yellow');
        });
    });
});

//add a reset button

const resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "resetBtn");
document.body.appendChild(resetBtn);
resetBtn.textContent = "Reset";

  
document.addEventListener("DOMContentLoaded", function() {
    const gridDivs = document.querySelectorAll('.gridDiv');
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', function() {
            this.classList.add('yellow');
        });
    });

    // Get the reset button by its ID
    const resetButton = document.getElementById('resetBtn');

    // Add click event listener to the reset button
    resetButton.addEventListener('click', function() {
        gridDivs.forEach(div => {
            div.classList.remove('yellow');
        });
    });
});
