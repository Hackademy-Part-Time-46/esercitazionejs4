// ESERCIZIO 1
let output = '';

for (let i = 1; i <= 100; i++) {
  output += i + ' ';
  if (i % 10 === 0) {
    output += '\n';  // Aggiunge un ritorno a capo ogni 10 numeri
  }
}

console.log(output);


// ESERCIZIO 2


function somma(n1, n2, n3, n4, n5) {
    return n1 + n2 + n3 + n4 + n5;
  }
  
  // Funzione per calcolare la media
  function media(n1, n2, n3, n4, n5) {
    let totale = somma(n1, n2, n3, n4, n5);
    return totale / 5;
  }
  
  
  let risultatoSomma = somma(10, 20, 30, 40, 50);
  let risultatoMedia = media(10, 20, 30, 40, 50);
  
  console.log("Somma:", risultatoSomma);
  console.log("Media:", risultatoMedia);
  

//   ESERCIZIO 3 
function tipoTriangolo(lato1, lato2, lato3) {
    if (lato1 === lato2 && lato2 === lato3) {
      console.log("Equilatero");
    } else if (lato1 === lato2 || lato2 === lato3 || lato1 === lato3) {
      console.log("Isoscele");
    } else {
      console.log("Scaleno");
    }
  }
  
  
  tipoTriangolo(3, 3, 3);  // Output: Equilatero
  tipoTriangolo(3, 3, 4);  // Output: Isoscele
  tipoTriangolo(3, 4, 5);  // Output: Scaleno

//   ESERCIZIO 4

function stampaTabellina(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
  }
  
  
  stampaTabellina(2);
  