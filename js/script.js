/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

Questi sono i dati delle persone:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const arrEmployees = [
  {
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    img: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    img: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    img: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    img: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    img: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    img: "img/barbara-ramos-graphic-designer.jpg",
  },
];

const eleContainer = document.querySelector(".container");

//console.table(arrEmployees);

for (let i = 0; i < arrEmployees.length; i++) {
  //STAMPARE IN CONSOLE TUTTE LE INFO DI OGNUNO
  /*
  console.log(
    `${arrEmployees[i].name} ${arrEmployees[i].surname} ${arrEmployees[i].role} ${arrEmployees[i].img}`
  );
  */

  //STAMPARE SUL DOM TUTTE LE INFO DI OGNUNO
  /*
  const eleCard = document.createElement("div");
  eleContainer.append(eleCard);
  eleCard.innerHTML = `${arrEmployees[i].name} ${arrEmployees[i].surname} ${arrEmployees[i].role} ${arrEmployees[i].img}`;
  */
  // Creo gli elementi div e img per fare le cards
  const eleCard = document.createElement("div");
  const profileImg = document.createElement("img");
  eleCard.classList.add("card");

  //Indico cosa mettere dentro gli elementi img and div utilizzando l'indice del ciclo come numero per selezionare l'i esimo elemento sia per le img che per le info cosi da farle corrispondere e farle stampare sul DOM
  profileImg.src = arrEmployees[i].img;
  eleCard.innerHTML += `<p class = 'info'>${arrEmployees[i].name} ${arrEmployees[i].surname}</p> <p class = 'info job'>${arrEmployees[i].role}</p>`;

  //Collego gli elementi creati al DOM
  eleContainer.append(eleCard);
  eleCard.prepend(profileImg);
  //Se voglio mettere in 'ordine' il JS devo usare il prepend sulle immagini così da dirgli di meterle 'prima' del testo, altrimenti potrei mettere queste 2 righe sopra al .innerHTML e .src corrispondenti e me li metteva bene anche utilizzando su tutti e 2 l'append. Però voglio lasciare così perchè mi sembra più ordinato e per provare anche il prepend che ho usato poco.
}
