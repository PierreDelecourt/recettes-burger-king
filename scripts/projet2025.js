/*****************************************************
           === Variables globales=== 
******************************************************/

const TAILLEMAX = 200;
/*****************************************************
           === Initialisation de la page=== 
******************************************************/

/**
 * chargement des images dans l'élément div#echantillon (Q1)
 * @param {Object} tabData - données des photos
 */
const selectionTab = function() {
    return () => Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
};
const getSelectedValue = selectionTab(); // Stocke la fonction pour obtenir la valeur sélectionnée
const remplissageImages = function(tableau) { // Remplit les images
    const echantillonDiv = document.getElementById('echantillon'); // Sélectionne la div avec l'id echantillon
    tableau.forEach((data) => { // Parcourt les données des photos
        const img = document.createElement('img'); // Crée un élément image
        img.src = `${data.image}`; // Définit la source de l'image
        img.alt = data.texte; // Définit l'attribut alt
        img.title = data.texte; // Définit l'attribut title pour le survol
        echantillonDiv.appendChild(img); // Ajoute l'image à la div echantillon
    });
};



/**
 * Mise en place des abonnements
 */
const init = function() {
    const selectedValue = getSelectedValue(); // Get the selected value dynamically
    remplissageImages(tabData[selectedValue]);
    agrandir();
    diminuer();
    afficherTexte();
    /*Mise en place des abonnements */
    //TODO
}

/***************************************************************
           === Changement des dimensions des images === 
****************************************************************/

/**
 * TODO
 */

const agrandir = function() { //Déclaration de la fonction
    const boutonPlus = document.getElementById("plus")
    const zoneEchantillon = document.getElementById('zoneEchantillon');
    const echantillons = zoneEchantillon.querySelectorAll('#echantillon img');
    boutonPlus.addEventListener('click', () => { //Dit qu'on modifie au clique
        echantillons.forEach((image) => { // Dit qu'il faut faire ce qui suit pour toutes les images
            const currentWidth = parseInt(window.getComputedStyle(image).width); //Prend la taille actuelle de l'image et le stock dans currentWidth
            if (currentWidth < TAILLEMAX) { //Regarde su la taille est inférieur à TAILLEMAX
                image.style.width = (currentWidth + 20) + 'px'; //Ajoute 20px à la taille de l'image
            }
        });
    });
};

const diminuer = function() { //Déclaration de la fonction
    const boutonMoins = document.getElementById("moins")
    const zoneEchantillon = document.getElementById('zoneEchantillon');
    const echantillons = zoneEchantillon.querySelectorAll('#echantillon img');
    boutonMoins.addEventListener('click', () => { //Dit qu'on modifie au clique
        echantillons.forEach((image) => { // Dit qu'il faut faire ce qui suit pour toutes les images
            const currentWidth = parseInt(window.getComputedStyle(image).width); //Prend la taille actuelle de l'image et le stock dans currentWidth
            if (currentWidth > 80) { //Regarde su la taille est supérieur à 80
                image.style.width = (currentWidth - 20) + 'px'; //Ajoute 20px à la taille de l'image
            }
        });
    });
};
    
const prochainChoixLibre = function() {
    const selectionDiv = document.getElementById('selection'); // Sélectionne la div avec la classe selection
    const prochainLibre = selectionDiv.querySelector('span'); // Cherche le premier élément span descendant de la div selection
    if (prochainLibre) {
        return prochainLibre; // Renvoie le span trouvé
    } else {
        return null; // Renvoie null s'il n'y en a pas
    }
};

/***************************************************************
           ===  Gestion du texte au survol === 
****************************************************************/

/**
 * TODO
 * 
 * Mettre l'évenement sur les images.
 */
const afficherTexte = function() {
    let txt = document.getElementById("texte")
    let nv_elem = document.createElement("p")
    img_choisie = document.getElementsByTagName("img")
    console.log(img_choisie)
    let img = document.addEventListener("click",function(){
        for (let i = 0;i < img_choisie.length ; i ++ ){
            if (this.src == img_choisie.item(i).src){
            }
            console.log(this.src)
        }
    })
}

/*
(variable) dans id selection -> class choisi
(variable) addEentListener("mouseover", fuction(){
})

*/

/***************************************************************
           === Retour des images dans la zone de sélection === 
****************************************************************/


/**
 * TODO
 */
const replacer = function() {
//TODO
}


/*************************************************************
           ===Initialisation de la page=== 
************************************************************/
init();