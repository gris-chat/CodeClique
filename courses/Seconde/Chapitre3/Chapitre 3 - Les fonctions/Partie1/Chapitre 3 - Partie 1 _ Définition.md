# Chapitre 3 - Partie 1 : Définition

## INTRODUCTION
Imaginez que vous ayez une recette de crêpes. Au lieu de réécrire toute la recette à chaque fois que vous voulez en faire, vous dites simplement "Je fais des crêpes". En programmation, c'est pareil ! Une fonction est un bloc de code qu'on nomme et qu'on peut réutiliser autant de fois qu'on veut sans avoir à tout réécrire. Cela permet d'organiser son code et de le rendre plus lisible.

## I/ L'instruction "def" (définir) 
Pour créer une fonction, on utilise le mot-clé `def` suivi du nom qu'on veut lui donner.

**Syntaxe :** 
```python
def nom_de_la_fonction():
    # Instructions que la fonction doit exécuter
```

**⚠️ Attention !**   
Comme pour les conditions `if` et les boucles `for/while` :
1.  Ne pas oublier les deux points **":"** à la fin de la ligne `def`.
2.  Ne pas oublier les parenthèses **"()"** après le nom.
3.  L'**indentation** (le décalage vers la droite) est obligatoire pour tout le bloc d'instructions de la fonction.

**Exemple :** 
```python
def dire_bonjour():
    print("Bonjour !")
    print("Comment allez-vous ?")
```

## II/ Les bonnes pratiques de nommage
Comme pour les variables, il y a des règles pour nommer ses fonctions afin que le code soit compréhensible par tous (y compris vous-même dans 3 mois !).

1.  **Explicite :** Le nom doit dire ce que fait la fonction. `calculer_moyenne` est mieux que `fonction_1`.
2.  **Snake case :** On écrit en minuscules et on sépare les mots par des underscores `_`. Exemple : `envoyer_email`.
3.  **Verbe d'action :** C'est souvent mieux de commencer par un verbe. `afficher_menu`, `calculer_total`, `verifier_mot_de_passe`.

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une fonction nommée `se_presenter` qui affiche 3 lignes : ton prénom, ton nom et ton âge.

2) Crée une fonction `alerte_rouge` qui affiche "ATTENTION !" trois fois de suite.
