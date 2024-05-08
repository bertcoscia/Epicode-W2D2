/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 5;
const num2 = 10;

if (num1 > num2) {
  console.log("Il numero più grande è " + num1);
} else {
  console.log("Il numero più grande è " + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num = 4;
if (num !== 5) {
  console.log("not equal");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num;
if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num1 = 5;
const num2 = -3;
if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log("true");
} else {
  console.log("false");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
let totalShoppingCart;
if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("Spesa di spedizione: €10");
  console.log("Totale: €" + totalShoppingCart);
} else {
  console.log("Spedizione gratuita!");
  console.log("Totale: €" + totalShoppingCart);
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart;
const isBlackFriday = true;

if (isBlackFriday === true) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart / 100 * 20);
  if (totalShoppingCart <= 50) {
    totalShoppingCart = totalShoppingCart + 10;
    console.log("Sconto Black Friday: -20%");
    console.log("Spesa di spedizione: €10");
    console.log("Totale: €" + totalShoppingCart)
  } else {
    console.log("Sconto Black Friday: -20%");
    console.log("Spedizione gratuita!");
    console.log("Totale: €" + totalShoppingCart)
  }
} else {
  if (totalShoppingCart <= 50) {
    totalShoppingCart = totalShoppingCart + 10;
    console.log("Spesa di spedizione: €10");
    console.log("Totale: €" + totalShoppingCart)
  } else {
    console.log("Spedizione gratutita!");
    console("Totale: €" + totalShoppingCart)
  }
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const a = 100;
const b = 1;
const c = 1000;

if (a > b && b > c) {
    console.log(a, b, c)
} else if (a > c && c > b) {
    console.log(a, c, b)
} else if (b > a && a > c) {
    console.log(b, a, c)
} else if (b > c && c > a) {
    console.log(b, c, a)
} else if (c > b && b > a) {
    console.log(c, b, a)
} else {
    console.log(c, a ,b)
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num = 26;

if (typeof num === "number") {
  console.log("num è una variabile di tipo number")
} else {
  console.log("num non è una variabile di tipo number")
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const num = 10;

if (num % 2 === 0) {
  console.log(num + " è un numero pari")
} else {
  console.log(num + " è un numero dispari")
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* oppure */

/* if (val > 5 && val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
} */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numbers = [];
console.log(numbers);
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* numbers.pop();
numbers.push(100);
console.log(numbers); */

/* oppure;
 */
numbers[numbers.length - 1] = 100;
console.log(numbers);
