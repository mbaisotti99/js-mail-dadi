
const game = prompt("A che gioco vuoi giocare? 1: MAIL 2: DADI")

if (game == 1 || game === "MAIL" || game === "mail"){
    
    // Mail 

    const userMail = prompt("Inserisci la mail utente");
    
    const adminMails = [
        'admin1@gmail.pippo',
        'admin2@famail.com',
        'giuseppe.inscatolato@pippo.it'
    ]
    
    let isVerified = false;
    
    for (let i = 0; i < adminMails.length; i++){
        if (userMail === adminMails[i]){
            isVerified = true;
        }
    }
    
    if (isVerified === true){
        console.log("Accesso riuscito!");
    } else {
        console.log("Impossibile accedere"); 
    }
} else if (game == 2 || game === "DADI" || game === "dadi" ){
// Dadi

const numbNumb = prompt("Con quanti numeri vuoi giocare?")
const diceFaces = parseInt(prompt("Quante facce avrà il dado?"))
const myNumb = [];
const iaNumb = [];

for (let i = 0; i < numbNumb; i++){
    myNumb[i] = Math.floor(Math.random() * diceFaces + 1 );
    iaNumb[i] = Math.floor(Math.random() * diceFaces + 1 );
}

console.log(`I numeri dell'IA sono ${iaNumb.join(" - ")}`);
console.log(`I tuoi numeri sono ${myNumb.join(" - ")}`);

let mySum = 0;
let iaSum = 0;

for (let i = 0; i < numbNumb; i++){
    mySum += myNumb[i];
    iaSum += iaNumb[i];
}

if (mySum > iaSum){
    console.log(`Hai VINTO con una cifra totale di ${mySum} contro ${iaSum} :D`);    
} else if (mySum < iaSum){
    console.log(`Hai PERSO con una cifra totale di ${mySum} contro ${iaSum} :(`);    
} else {
    console.log(`PAREGGIO! ${mySum} a ${iaSum}`);
}
} else {

console.log("Errore, ricarica la pagina");

}

alert("Per giocare ancora ricarica la pagina");




