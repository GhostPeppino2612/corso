/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(23, 20));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};
console.log(crazySum(12, 12));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n3) {
  if (n3 > 19) {
    return n3 - 19;
  } else {
    return 19 - n3;
  }
};
console.log(crazyDiff(2));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((20 < n && n <= 100) || n === 400) {
    return true;
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (inputString) {
  if (inputString.startsWith("EPICODE")) {
    return inputString;
  } else {
    return "EPICODE " + inputString;
  }
};
console.log(epify("ciao"));
// controllo carattere per carattere

/* const epi = "EPICODE"
const epify = function (str) {
  let result = true
  if (typeof str === "string") {
    for (let i = 0; i < epi.length; i++) {
      if (!str[i] === epi[i]) {
        result = false
      }
    }
    retun result
  } else {
    console.log("inserisci una stringa per favore")
    return false
  }
}

const epify2 = function(str) {
  let wordIndex = str.indexOf(epi) //mi restituisce l'indice della posizione di epicode
  if (wordIndex === 0) {
    return str
  } else {
    return epi + str
  }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (number) {
  if ((number % 3 === 0 || number % 7 === 0) && number > 0) {
    return "il numero è accettato";
  } else {
    return "il numero non è accettato";
  }
};
console.log(check3and7(15));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (inputString) {
  let word = "";
  const stringArray = inputString.split("").reverse();
  for (let i = 0; i < stringArray.length; i++) {
    word += stringArray[i];
  }
  return word;
};
console.log(reverseString("EPICODE"));

// join("") fa ritornare un array una stringa

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const upperFirst = function (inputString) {
  const wordSplit = inputString.split(" ");
  let totalWord = "";
  let partialWord = "";
  for (let i = 0; i < wordSplit.length; i++) {
    partialWord += wordSplit[i].charAt(0);
    totalWord = partialWord + wordSplit
  }
  return partialWord;
}; */
const upperFirst = function (sentence) {
  const arrayOfWords = sentence.split(" ");
  let resultString = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    resultString +=
      arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    resultString += " ";
  }
  return resultString;
};
console.log(upperFirst("il fenomeno ciao sono il fenomeno"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  return str.slice(1, str.length - 1);
};
console.log(cutString("EPICODE"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (number1) {
  const randomNumbers = [];
  for (let i = 0; i < number1; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};
console.log(giveMeRandom(5));
