# Chapitre 3 - Partie 1 : Définition des fonctions
Imaginez que vous ayez une recette de crêpes. Au lieu de recréer la recette à chaque fois que vous voulez en faire, vous suivez simplement la même recette . En programmation, c'est pareil ! Une fonction est un bloc de code qu'on nomme et qu'on peut réutiliser autant de fois qu'on veut sans avoir à tout réécrire. Cela permet d'organiser son code et de le rendre plus lisible.
## I/ L'instruction "def" 
Pour créer une fonction, on utilise le mot-clé `def` suivi du nom qu'on veut lui donner.

:::outline{outlineType="RETENIR"}
**Syntaxe** :
def *nom_de_la_fonction*(): \
    *# Instructions que la fonction doit exécuter*
:::

:::outline{outlineType="ATTENTION"}
Comme pour les conditions *if* et les boucles *for/while* :
* Ne pas oublier les deux points *:* à la fin de la ligne def.
* Ne pas oublier les parenthèses *()* après le nom.
* L'**indentation** (le décalage vers la droite) est obligatoire pour tout le bloc d'instructions de la fonction.
:::

:::outline{outlineType="EXEMPLE"}
```python
def dire_bonjour():
    print("Bonjour !")
    print("Comment allez-vous ?")
```
:::
## II/ Les bonnes pratiques de nommage
Comme pour les variables, il y a des règles pour nommer ses fonctions afin que le code soit compréhensible par tous, y compris vous-même !

1. **Explicite** : Le nom doit dire ce que fait la fonction, *calculer_moyenne* est mieux que *fonction_1*.
3. **Minuscules**: On écrit en minuscules et on sépare les mots par des underscores _.
4. **Verbe d'action** : C'est souvent mieux de commencer par un verbe comme *afficher_menu*, *calculer_total*, *verifier_mot_de_passe*.
## EXERCICES D'APPLICATION DIRECTE :
1. Créer une fonction nommée *se_presenter()* qui affiche 3 lignes : ton prénom, ton nom et ton âge.
```python
```
2. Créer une fonction *alerte_rouge()* qui affiche "ATTENTION !" trois fois de suite.
```python
```


