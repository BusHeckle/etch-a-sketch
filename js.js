//create a container div
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

//create a 16 x 16 grid of divs for boxes
for (let i=0; i <= 16*16; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", "gridDiv" + (i +1) );
    gridDiv.setAttribute("class", "gridDiv");
    container.appendChild(gridDiv);
}

//add class .hover when hovering over a grid box

//const box = document.querySelector(".gridDiv");

//box.onmouseover = function () { box.setAttribute("class", "hover");}    


