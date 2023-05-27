                            /*****exercice1*****/
/*
// ecrire une boucle for qui affiche les nombres de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
*/

                            /*****exercice2*****/
 /*                          
// ecrire une boucle while qui affiche les nombres pairs de 0 a 20 dans la console
let i = 0;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i += 1;
}
 */                           /*****exercice3*****/
/*
// ecrire une fonction qui prend un nombre en parametre et affiche "nombre pair" si le nombre est pair, et "nombre pair" si le nombre est impair
function nombre(x) {
    if (x % 2 === 0) {
      console.log('nombre pair');
    } else {
      console.log('nombre impair');
    }
}
nombre(5);*/
                            /*****exercice4*****/
/*
//  ecrire une boucle for qui calcul la somme des nombres de 1 a 100 puis affiche le resultat dans la console   
let somme = 0; 
for (let i = 1; i <= 100; i++) {
  somme += i; 
} 
console.log(`La somme des nombres de 1 a 100 est ${somme}`);
*/
                            /********exercice5********/
/*
// ecrire une fonction qui prend un tableau de nombre en parametre et retourne la somme de tous les nombres pairs du tableau
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function fonctionpair(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 === 0) {
      somme += tableau[i]
    }
  }
  return somme;
}
let resultat = fonctionpair(nombres);
console.log(resultat);  
*/
                          /********exercice6********/

// ecrire une boucle for qui itere de 1 a 20. Pour chaque iteration, affiche "Fizz" si le nombre est divisible par 3,
// "Buzz" s'il est divisible par 5,et "FizzBuzz" si le nombre est divisible par 3 et 5. sinon, affiche simplement le nombre 
console.log('-------exercice6-------')

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i,"Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  }  else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  }else {
    console.log(i);
  }
}






