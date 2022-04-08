import Gobelet from "./Gobelet";

export default class Joueur {
    nom: string = "Paul";
    score: number = 8;

    jouer(gobelet: Gobelet){
        console.log("C'est au joueur de jouer");
    }

    afficherScore() {
        console.log("Afficher le score du joueur")
    }
}