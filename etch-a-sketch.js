const container = document.querySelector(".container");
const section = document.querySelector(".section");
let sizeOfCanvas;
let btnHarvey = document.querySelector("#Harvey");
let btnCaroline = document.querySelector("#Caroline");
let btnVincent = document.querySelector("#Vincent");
let btnAlex = document.querySelector("#Alex");
let btnLeah = document.querySelector("#Leah");
let btnSebastian = document.querySelector("#Sebastian");
let btnPenny = document.querySelector("#Penny");
let btnClean = document.querySelector(".btnClean");

let btnCanvas = document.querySelector(".btnCanvas");


function gridItems(col, rows) {
    for(i = 0; i < (col * rows); i ++){
        const gridItem = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(gridItem).classList.add("box");
    }
}

gridItems(64, 64)




container.style.display = "grid";
container.style.width = "500px";
container.style.height = "500px";
container.style["z-index"] = "100";

let x;

let eachGrid = document.querySelectorAll(".box")
let griditems = document.querySelector(".box")
let drawBlack = function(i) {
    x = document.getElementById("newcolor").value;
    if(x == null) {
        i.target.style["background-color"] = "black";
    } else if(x) {
        i.target.style["background-color"] = x;
    }
}

function drawDefault () {
    for (i= 0; i < eachGrid.length; i++) {
        eachGrid[i].addEventListener("mouseover", drawBlack)
    }}
function control(e) {
    if (e.keyCode === 38) {
        for (i= 0; i < eachGrid.length; i++) {
            eachGrid[i].addEventListener("mouseover", drawBlack)
        }
    } else if(e.keyCode === 37) {
        for (i= 0; i < eachGrid.length; i++) {
            eachGrid[i].removeEventListener("mouseover", drawBlack)
        }
    }
}



document.addEventListener("keydown", control)   



document.querySelector(".btnClean").onclick = function(){
    for (i = 0; i < eachGrid.length; i++) {
        eachGrid[i].style["background-color"] = "transparent";
}};



document.querySelector(".btn-white-board").onclick = function(){
    container.style.removeProperty("background-image");
};


document.querySelector(".btnCanvas").onclick = function(){

    sizeOfCanvas = prompt();
    gridItems(sizeOfCanvas, sizeOfCanvas);
};


btnHarvey.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Harvey.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })

btnCaroline.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Caroline.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })

btnVincent.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Vincent.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })  

btnAlex.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Alex.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })  

btnLeah.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Leah.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })  

btnSebastian.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Sebastian.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })  

btnPenny.addEventListener("click", () => {
        container.style["background-image"] = "url('images/Penny.png')";
        container.style["background-repeat"] = "no-repeat";
        container.style["background-size"] = "cover";
    })  

