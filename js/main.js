// on sélection l'icone de droite en vue de pouvoir la controler
let icone = document.querySelector("#icone");

// GESTION DES VIGNETTES DE CHOIX DE COULEUR DE FOND

// on sélectionne le conteneur d'id "choixCouleurs" en vue de le contrôler
// (car on souhaitera lui ajouter du contenu)
let choixCouleurs = document.querySelector("#choixCouleurs");

// on définit un tableau des couleurs de fond
let couleurs = ["turquoise","rgb(255,255,0)","#FF0000","lime"];
// console.table(couleurs);

// on parcourt le tableau, et pour chaque couleur...
couleurs.forEach(function(couleur,i){
    // console.log(i,couleur);
    
    // on prépare la vignette à injecter
    let vignette = document.createElement("div");   // <div></div>
    vignette.className="vignette";                  // <div class="vignette"></div>
    vignette.style.background=couleur;
    // console.log(vignette);

    // on la rend aussi cliquable
    vignette.onclick=function(e){
        icone.style.background=couleur;
    };

    // on l'ajoute à notre page (à notre DOM)
    choixCouleurs.appendChild(vignette);

});


// GESTION DES VIGNETTES DE CHOIX DE COULEUR D'ICONE ET DE TEXTE

// on sélectionne le conteneur d'id "choixCouleursIcone" en vue de le contrôler
// (car on souhaitera lui ajouter du contenu)
let choixCouleursIcone = document.querySelector("#choixCouleursIcone");

// on définit un tableau des couleurs d'icone et de texte
let couleursIcone=["black","purple","white","blue"];

// on parcourt notre tableau afin de récupérer tour à tour chaque couleur 
// qu'on appelle couleur
couleursIcone.forEach(function(couleur,i){

    // on ajoute tour à tour une nouvelle vignette en complétant le contenu HTML du conteneur
    choixCouleursIcone.innerHTML+=` <div onclick="changerCouleurIcone('${couleur}')" class="vignette" 
                                        style="background:${couleur}"></div>`;

});

// fonction qui prend une couleur en paramètre et l'utilise 
// pour changer la couleur d'icone et de texte
function changerCouleurIcone(couleur){
    icone.style.color=couleur;
}


// GESTION DES VIGNETTES DE CHOIX D'ICONES

// on sélectionne le conteneur d'id "choixIcones" en vue de le contrôler
// (car on souhaitera lui ajouter du contenu)
let choixIcones = document.querySelector("#choixIcones");
let grandeIcone = document.querySelector("#icone i");

// on définit un tableau de classes d'icones
let listeClassesIcones=[
    "bi-android2",
    "bi-airplane-engines-fill",
    "bi-arrow-through-heart-fill",
    "bi-asterisk"
];

// on parcourt notre tableau afin de récupérer tour à tour chaque couleur 
// qu'on appelle couleur
listeClassesIcones.forEach(function(classeIcone,i){
    // on ajoute tour à tour une nouvelle vignette en complétant le contenu HTML 
    // du conteneur
    choixIcones.innerHTML+=`    <div class="vignette" onclick="changerIcone('${classeIcone}')">
                                    <i class="bi ${classeIcone}"></i>
                                </div>`;
});

// fonction qui change l'icone
function changerIcone(classeIcone){
    grandeIcone.className="bi "+classeIcone;
}


// GESTION DU CHAMP DE TEXTE

// on récupère une référence au titre de la grande icone
let intitule = document.querySelector("#intitule");

function majIntitule(champTexte){
    intitule.innerHTML=champTexte.value;
}


// GESTION DES PRESETS (pré-configurations)
// let preset0 = {couleurFond:"yellow",couleurTexte:"purple",icone:"bi-asterisk",intitule:"Jolie Icone"};
// let preset1 = {couleurFond:"red",couleurTexte:"white",icone:"bi-arrow-through-heart-fill",intitule:"Super Icone"};
// let preset2 = {couleurFond:"turquoise",couleurTexte:"blue",icone:"bi-airplane-engines-fill",intitule:"Icone Sympa"};
// let preset3 = {couleurFond:"lime",couleurTexte:"black",icone:"bi-android2",intitule:"Magnifik Icone"};
// let presets = [];
// presets[0]=preset0;
// presets[1]=preset1;
// presets[2]=preset2;
// presets[3]=preset3;
// console.table(presets);

let presets = [
    {couleurFond:"yellow",couleurTexte:"purple",icone:"bi-asterisk",intitule:"Jolie Icone"},
    {couleurFond:"red",couleurTexte:"white",icone:"bi-arrow-through-heart-fill",intitule:"Super Icone"},
    {couleurFond:"turquoise",couleurTexte:"blue",icone:"bi-airplane-engines-fill",intitule:"Icone Sympa"},
    {couleurFond:"lime",couleurTexte:"black",icone:"bi-android2",intitule:"Magnifik Icone"}
];

// on sélectionne le conteneur des vignettes de presets, car on lui ajoutera des vignettes
let choixPresets = document.querySelector("#choixPresets");
let champTexte = document.querySelector("input");

// console.table(presets);
presets.forEach(function(preset,i){

    console.log(i,preset);

    // je crée une vignette dans l'espace mémoire
    let vignette = document.createElement("div");   // <div></div>
    vignette.className="vignette";                  // <div class="vignette"></div>
    vignette.innerHTML=i;                           // <div class="vignette">0</div>
    
    // on rend cliquable chaque vignette
    vignette.onclick=function(e){
        // modification de la couleur de fond
        icone.style.background=preset.couleurFond;
        // modification de la couleur de texte
        icone.style.color=preset.couleurTexte;
        // modification de l'icone
        grandeIcone.className="bi "+preset.icone;
        // modification du texte
        intitule.innerHTML=preset.intitule;
        // modification du champ texte
        champTexte.value=preset.intitule;
    };

    // on ajoute chaque vignette au conteneur
    choixPresets.appendChild(vignette);

});