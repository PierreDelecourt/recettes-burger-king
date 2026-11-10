const selectioner = function () {
    const echantillons = document.getElementById("echantillon")
    const img_echantillons = echantillons.getElementsByTagName("img")
    const fenetre1 = document.getElementById('choix1'); // Séléctionne la première fenêtre de selection
    const fenetre2 = document.getElementById('choix2'); // Séléctionne la seconde fenêtre de selection
    const fenetre3 = document.getElementById('choix3'); // Séléctionne la troisième fenêtre de selection
    for (i = 0; i < img_echantillons.length; i++) {
        img_echantillons[i].addEventListener('click',function(){
            prochainlibre = prochainChoixLibre();
            nouvel_elem = document.createElement('img');
            nouvel_elem.src = this.src;
            nouvel_elem.alt = this.texte;
            const span = fenetre1.querySelector('span');
            if (span) {
                span.innerHTML = ''; // Clear any existing content in the span
                span.appendChild(nouvel_elem);
            }
        })
    }
}


selectioner()
