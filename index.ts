import De from './De';
import Gobelet from './Gobelet';
import Partie from './Partie';
import Joueur from './Joueur';

const de = new De();
de.lancer();

const gobelet = new Gobelet();
gobelet.lancer();
gobelet.afficherScore();

const partie = new Partie();
partie.initialiserPartie();
partie.lancerPartie();
partie.afficherGagnant();

const joueur = new Joueur();
joueur.jouer(gobelet);
joueur.afficherScore();

