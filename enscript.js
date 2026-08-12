const citations= [
    "le seul moyen de faire du bon travail et d'aimer se que vous faites.",
    "La créativité, c'est l'intelligence qui s'amuse.",
    "Tout se que tu as toujours voulus est de l'autre coté de la peur.",
    "il n'est jamais trop tard pour devenir se que tu aurais pu etre.",
    "le succès, c'est  de passer d'échec en échec sans perdre son enthousiasme.",
    "soyez le changement que vous voulez voir dans le monde",
    "la simplicité est la sophistication supreme.",
    "ne comptez pas les jours, faites en sorte que les jours comptent.",
    "Agissez comme si il était impossible d'échouer.",
    "Codez comme si vous étiez le héros de votre propre histoire."
];
//Fonction pour generer une couleur aleatoire
function genererCouleur() {
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random()*16)];
    }
    return couleur;
}
const btn = document.getElementById('btn-changer');
const box = document.getElementById('citation-box');

btn.addEventListener('click', ()=>{//changer de citation
    const indexAleatoire = Math.floor(Math.random()*citations.length);
box.textContent = `"${citations[indexAleatoire]}"`
// changer la couleur du fond du body
document.body.style.backgroundColor = genererCouleur();
});