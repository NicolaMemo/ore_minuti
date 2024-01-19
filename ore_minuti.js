// Definizione di una funzione chiamata time_convert con un parametro denominato num
function time_convert(num) {
  // Calcola il numero di ore dividendo num per 60 e arrotondando per difetto
  var hours = Math.floor(num / 60);

  // Calcola i minuti rimanenti prendendo il resto della divisione di num per 60
  var minutes = num % 60;

  // Restituisce il risultato come una stringa nel formato "ore:minuti"
  return hours + ":" + minutes;
}

// Stampa il risultato di chiamare time_convert con differenti input numerici sulla console
console.log("Risultato di time_convert(71):", time_convert(71));
console.log("Risultato di time_convert(450):", time_convert(450));
console.log("Risultato di time_convert(1441):", time_convert(1441));
