/**
 * Practice: List most common event listeners: 
 * - Read more about events types on mdn docs: https://developer.mozilla.org/en-US/docs/Web/Events
 */
const container = document.querySelector(".grid"); 

container.addEventListener("mouseenter", () => {
  container.style.backgroundColor = "#e63946"; 
},
false
);

container.addEventListener("mouseleave", () =>{
  container.style.backgroundColor = "white"
}, 
false
); 

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

//Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners 
gridCells.forEach((cell) => {

/** Set one background color when clicked  
cell.addEventListener("click", (e) => {
*  console.log(e);
*  cell.style.backgroundColor = "#1d3557";
});*/

//Set outline when cell is hovered
cell.addEventListener("mouseenter", () => {
  cell.style.outline = "2px solid #a8dadc"; 
});

//Remove outline when the mouse leave the cell
cell.addEventListener("mouseleave", () => {
  cell.style.outline = "";
});

// Set and remove random background from cell when it is clicked
cell.addEventListener("click", () => {
  if (cell.style.backgroundColor) {
    cell.style.backgroundColor = "";
  } else {
    cell.style.backgroundColor = `#${randColor()}`;
  };
});

// Set different margin when a non-primary button has been pressed
cell.addEventListener("onauxclick", () => {
  cell.style.margin = "2px"
})
});

//Set the page background color using "a" on the keyboard

const body = document.body;
body.addEventListener("keydown", (event) =>{
  //event code holds the current key pressed:
  console.log(event.code);

  //Test for KeyA
  /**
   * Ternary operator : Considering event.code is equal to KeyA if the background color equals to empty string 
   * then output the color chosen, else remove the color
   */ 
  if (event.code === "KeyA") {
    body.style.backgroundColor === ""
    ? (body.style.backgroundColor = "#1d3557")
    : (body.style.backgroundColor = "");
  }
}); 

/**
 * Forms events
 */

const userNumber = document.querySelector("form"); 

userNumber.addEventListener("submit", displayUserNumber);

function displayUserNumber(e) {
  e.preventDefault();
  var select = userNumber.querySelector("input").value;

  console.log(select);
  document.querySelector(".repos__number").innerHTML = `${select} repos`;
  userNumber.querySelector("input").value=""; 
}







