const container = document.querySelector(".container");
let btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME"; 
btn.className = "btn";

document.body.appendChild(btn);  
let gridItem;
for (i=0; i < 256; i++) {
    gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.textContent = ".";
    gridItem.style.color = "white";
    container.appendChild(gridItem);
    gridItem.style.border = "solid 1px black";
    gridItem.style.pointer = "default";
    gridItem.style["user-select"] = "none";
}
container.style.display = "grid";
// container.style["place-items"] = "center";
container.style.width = "330px";
container.style.height = "330px";
container.style["grip-gap"] = "0px";
container.style.border = "solid 1px black";



container.style["grid-template-columns"] = "repeat(16, 1fr)";
container.style["grid-template-rows"] = "repeat(16, 1fr)";

let eachGrid = document.querySelectorAll(".grid-item")

for (i = 0; i < eachGrid.length; i++) {
    eachGrid[i].addEventListener("mouseover", function(e) {
        e.target.style["background-color"] = "pink";
        e.target.style.color = "pink";
    })

}
document.querySelector(".btn").onclick = function(){
    for (i = 0; i < eachGrid.length; i++) {
        eachGrid[i].style["background-color"] = "white"
}};


// container.style[grid-column-gap] = "50px";




