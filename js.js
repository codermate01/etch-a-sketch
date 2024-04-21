

// This function creates a div

function createDiv(num = 16){
    var boardDiv = document.createElement("div");
    boardDiv.classList.add("square");
    /* Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */

    boardDiv.addEventListener("mouseover",() => {
        boardDiv.style.backgroundColor = "blue";})
    return boardDiv;
}

// This function creates multiple divs
var container = document.querySelector(".container");
var myDivs = [];
function multipleDivs(num = 16){
    for(i = 0; i< num**2; i++){
        myDivs.push(createDiv(num));  
        myDivs[i].style.height = `${960/num}px`;
        myDivs[i].style.width =  `${960/num}px`;
        container.appendChild(myDivs[i]);
        
    }
    
   
 
}
// This functions removes divs
function removeDiv(num = 16){
    
    for(i = 0; i< num**2; i++){
        container.removeChild(myDivs[i]);
        
    }
}


// This generates the grid after loading the page
multipleDivs();

// This is the button that takes the input from the user
const btn = document.querySelector(".gridSize")

btn.addEventListener("click", ()=>{
    var size = 0;
    while(size<2 || size >100){
        size = prompt("Enter a grid size between 2 and 100");
    }
    removeDiv();
    multipleDivs(size);
})
