// ---- Exercise 1 ----

// function wordVerifier (word1, word2) {

//     let result = false;

//     if (word1.length === word2.length) {

//       result = true;

//     }

//     return result;
//   }

//   const userWord1 = prompt("Inserisci la prima parola");

//   const userWord2 = prompt("Inserisci la seconda parola");
  
//   if (wordVerifier(userWord1, userWord2)) {

//     console.log(userWord1, userWord2);

//   }

//   else if (userWord1.length > userWord2.length) {

//     console.log(userWord1)
//   } 

//   else {

//     console.log(userWord2);

//   }



// ---- Exercise 2 ----

// function argomento (parola){
//     let rovescia = '';
    
//     for ( let i = parola.length - 1; i >= 0; i -- ){  
//      rovescia = rovescia + parola[i];
//     }
    
//     if(rovescia == parola){
//     alert('La parola è un palindromo');
//     }
//     return rovescia;
// }

// let parolaUtente = prompt('inserisci una parola');
// let parolaRovesciata = argomento(parolaUtente);

// console.log(parolaRovesciata);



// ---- Exercise 3 ----

// function arrayFusion ( arrayG, arrayV ) {

//     const gogeta = [];

//     for ( let i = 0; i < arrayV.length; i ++ ) {

//         gogeta.push(arrayG[i]);

//         gogeta.push(arrayV[i]);

//     }

//     return gogeta;
// }

// const array1 = ['a', 'b', 'c', 'd'];

// const array2 = [1, 2, 3, 4];

// let dbz = arrayFusion( array1, array2 );

// console.table(dbz);



// ---- Exercise 4 ----

// let mela1 = {
//     varieta: 'rossa',
//     peso: 170,
//     diametro:  9,
// }
// let mela2 = {
//     varieta:  'verde',
//     peso: 165,
//     diametro:  8,
// }
// let mela3 = {
//     varieta:  'gialla',
//     peso:  170,
//     diametro:  9,
// }
// let mela4 = {
//     varieta:  'rossa',
//     peso:  190,
//     diametro:  10,
// }
// let mela5 = {
//     varieta:  'rossa',
//     peso:  200,
//     diametro:  11,
// }
// let mela6 = {
//     varieta:  'gialla',
//     peso:  150,
//     diametro:  7,
// }
// let mela7 = {
//     varieta:  'verde',
//     peso:  210,
//     diametro: 12,
// }
// let mela8 = {
//     varieta:  'verde',
//     peso:  205,
//     diametro:  11,
// }
// let mela9 = {
//     varieta : 'gialla',
//     peso:  235,
//     diametro:  13,
// }
// let mela10 = {
//     varieta:  'rossa',
//     peso:  160,
//     diametro:  8,
// }

// let cestoMele = [mela1, mela2, mela3, mela4, mela5, mela6, mela7, mela8, mela9, mela10];
// let meleGrandi = [];
// let melePiccole = [];


// function calcolatorePeso (contenitore) {

//     let totPeso = 0;

//     for ( let j = 0; j < contenitore.length; j ++ ) {

//         totPeso += contenitore[j].peso;
//     }

//     return totPeso;

// }


// for (let i = 0; i < cestoMele.length; i ++) {

//     let campione = cestoMele[i];

//     if (campione.diametro > 10) {
//         meleGrandi.push(campione);
//     }
//     else {
//         melePiccole.push(campione);
//     }

// }


// console.log(`Tutte le mele pesano ${calcolatorePeso(cestoMele)}g`);

// console.log(`Le mele grandi pesano ${calcolatorePeso(meleGrandi)}g`);

// console.log(`Le mele piccole pesano ${calcolatorePeso(melePiccole)}g`);

// console.table(meleGrandi);

// console.table(melePiccole);




