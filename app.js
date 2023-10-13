//////////////////////////////////FUNZIONI/////////////////////////////


// FUNZIONE PER GENERARE LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA
function generateGrill() {

  playBtnElement.innerHTML = `Nuova partita <i class="fa-solid fa-rotate-right"></i>` 

  // Mi vado a prendere l'elemento del DOM che contiene le celle
  const gridElement = document.querySelector(".grid");

  // Cancello la griglia ogni volta che viene premuto il tasto gioca
  gridElement.innerHTML = "";

  // Mi vado a prendere la select dal DOM
  const selectElement = document.getElementById("difficulty");

  if (selectElement.value === "f") {
    // Genero 49 volte le caselle
    for (let i = 0; i < easy; i++) {
      const n = i + 1;

      //Creo la cella che dovrò stampare tot volte nel DOM
      const cellString = `<div class="cell cell-easy">${n}</div>`;

      //Concateno ad ogni giro del ciclo la variabile cell
      gridElement.innerHTML += cellString;
    }
  } else if (selectElement.value === "m") {
    {
      // Genero 81 volte le caselle
      for (let i = 0; i < medium; i++) {
        const n = i + 1;

        //Creo la cella che dovrò stampare tot volte nel DOM
        const cellString = `<div class="cell cell-medium">${n}</div>`;

        //Concateno ad ogni giro del ciclo la variabile cell
        gridElement.innerHTML += cellString;
      }
    }
  } else {
    // Genero 100 volte le caselle
    for (let i = 0; i < difficult; i++) {
      const n = i + 1;

      //Creo la cella che dovrò stampare tot volte nel DOM
      const cellString = `<div class="cell cell-difficult">${n}</div>`;

      //Concateno ad ogni giro del ciclo la variabile cell
      gridElement.innerHTML += cellString;
    }
  }
}


// FUNZIONE PER DARE BG COLOR ALLE CELLE E CONSOLE LOG DEL NUMERO DELLE CELLE
function addBgAndN () {

  // Vado a prendermi tutti gli elementi dal DOM con classe cell
  const cellElements = document.querySelectorAll(".cell");

  for (let i = 0; i < cellElements.length; i++) {
    const n = i + 1;
    const actualCell = cellElements[i];

    // Aggiungo l'evento click ad ogni casella
    actualCell.addEventListener("click", function () {
      actualCell.classList.add("bg-azure");
      console.log(n);
    })
  }
}

  /////////////////////////////FINE FUNZIONI//////////////////////////////////


  // Mi creo le variabili che corrispondono al numero di colonne da inserire
  const easy = 49;
  const medium = 81;
  const difficult = 100;

  // Mi vado a prendere il button play dal DOM
  const playBtnElement = document.getElementById("play-btn");

  // Creiamo un evento al click del button
  playBtnElement.addEventListener("click", function () {

    generateGrill();
    
    addBgAndN ();
  })













