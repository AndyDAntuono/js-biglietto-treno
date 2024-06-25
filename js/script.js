//chiedo all'utente quanta distanza deve percorrere
const km = prompt("Quanti km devi percorrere?")

//devo applicare 0.21 € per ogni chilometro percorso dall'utente
const fullPrice = km * 0.21

//chiedo all'utente la sua età
const age = prompt("Quanti anni hai?")

//SE l'utente è un minorenne, egli avrà il biglietto scontato del 20%
//SE l'utente è un over 65, egli avrà il biglietto scontato del 40%
//ALTRIMENTI l'utente dovrà pagare il prezzo pieno

let discount = 0;

if(age < 18 ) {
    discount = 20;
}

else if(age > 65) {
    discount = 40;
}

//calcolo il prezzo finale
const discountPrice = fullPrice - (fullPrice * discount / 100)

//innesto il prezzo nel file html
document.getElementById("price").innerHTML = discountPrice.toFixed(2)+"&euro;"