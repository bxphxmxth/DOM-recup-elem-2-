// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1

let secH1Contenu = document.getElementsByTagName("h1")[1];

console.log(secH1Contenu.innerText);

// ### 2. Affiche le contenu textuel du dernier li

// trouver le nombre de li d'abord
// let allLi = document.getElementsByTagName("li");
// console.log(allLi);

// mtn afficher le contenu du dernier li

let lastLi = document.getElementsByTagName('li')[3];
console.log(lastLi.innerText);

// ### 3. Affiche le contenu textuel du premier p en majuscule

let firstP = document.getElementsByTagName("p")[0];
console.log(firstP.innerText);

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

let allLi = document.querySelectorAll("li");
console.log(allLi);

// changer en array :

Array.from(allLi);
console.log(allLi);


allLi.forEach(element => {
     console.log(element.innerText.toUpperCase());
});