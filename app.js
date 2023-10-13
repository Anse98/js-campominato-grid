

// Mi vado a prendere il button play dal DOM
const playBtnElement = document.getElementById("play-btn");

// Mi vado a prendere l'elemento del DOM che contiene le celle
const gridElement = document.querySelector(".grid");


// Creiamo un evento al click del button
playBtnElement.addEventListener("click", function (){

  // Cancello la griglia ogni volta che viene premuto il tasto gioca
  gridElement.innerHTML ="";

  // Genero 100 volte le caselle
  for(let i = 0; i < 100; i++) {
    const n = i + 1;

    //Creo la cella che dovrò stampare tot volte nel DOM
    const cellString = `<div class="cell">${n}</div>`;

    //Concateno ad ogni giro del ciclo la variabile cell
    gridElement.innerHTML += cellString; 
  }
    
  // Vado a prendermi tutti gli elementi dal DOM con classe cell
  const cellElements = document.querySelectorAll(".cell");
  
  for(let i = 0; i < cellElements.length; i++) {
    const n = i + 1;
    const actualCell = cellElements[i];
    
    // Aggiungo l'evento click ad ogni casella
    actualCell.addEventListener("click", function () {
      actualCell.classList.add("bg-azure");
      console.log(n);
    })
  }
})









