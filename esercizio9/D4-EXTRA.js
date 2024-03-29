// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function () {
  let tot = 0;
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(Math.floor(Math.random() * 21));
  }
  newArray.forEach((n) => {
    if (n > 5) {
      console.log(`Il numero ${n} è maggiore di 5`);
    } else {
      console.log(`Il numero ${n} non è maggiore di 5`);
    }
  });

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > 5) {
      tot += newArray[i];
    }
  }
  console.log(tot);
};
checkArray();
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 12,
    name: "scopa",
    id: 235334,
    quantity: 1,
  },
  {
    price: 2,
    name: "giocattolo",
    id: 235754,
    quantity: 3,
  },
  {
    price: 45,
    name: "webcam",
    id: 235434,
    quantity: 1,
  },
  {
    price: 34,
    name: "cibo",
    id: 235324,
    quantity: 1,
  },
];
const shoppingCartTotal = () => {
  let tot = 0;
  shoppingCart.forEach((obj) => {
    tot = tot + obj.price * obj.quantity;
  });
  return console.log(`Il totale è ${tot}`);
};
shoppingCartTotal();
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = (obj) => {
  obj = {
    price: 36,
    name: "torcia",
    id: 235344,
    quantity: 1,
  };
  shoppingCart.push(obj);
  console.log(shoppingCart.length - 1);
};
addToShoppingCart();
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = () => {
  shoppingCart.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log(shoppingCart[0]);
};
maxShoppingCart();
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = () => {
  console.log(shoppingCart[shoppingCart.length - 1]);
};
latestShoppingCart();
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = (x) => {
  if (x < 0 || x > 9) {
    console.log("Il numero deve essere tra 0 e 9.");
    return;
  }

  let count = 0;
  while (count < 3) {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    if (randomNumber > x) {
      count++;
    } else {
      count = 0;
    }
  }
};
loopUntil(2);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array1 = [1, "ciucc", 67, 23, "ciao", 89];
const average = (array) => {
  let tot = 0;
  let count = 0;
  array.forEach((element) => {
    if (typeof element === "number") {
      count++;
      tot += element;
    }
  });
  return (tot /= count);
};
console.log(average(array1));
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array2 = ["ciucc", "dd", "ccc", "rerere", "ciuccccc", "tt"];
const longest = (array) => {
  let longestString = "";
  array.forEach((string) => {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });
  return longestString;
};
console.log(longest(array2));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
