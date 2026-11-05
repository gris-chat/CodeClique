# Chapitre 2 - Partie 2 : les boucles - while

## INTRODUCTION 
Imaginez que vous deviez copier 100 fois "Je ne dois pas bavarder en classe". C'est long et ennuyeux à écrire ligne par ligne. En programmation, on utilise des "boucles" pour répéter des instructions. Il existe deux types de boucles. Ici, nous voyons la boucle non bornée : le while (tant que).

## I/ Le principe du "Tant que" 
La boucle while permet de répéter un bloc d'instructions tant qu'une condition reste Vraie. On ne sait pas forcément à l'avance combien de fois on va tourner dans la boucle.

**Syntaxe :** 
```python
while condition : 
    # Instructions à répéter
```

## II/ Exemple concret On veut créer un compte à rebours simple.

**Syntaxe**
```python
compteur = 5 
while compteur > 0: 
    print(compteur) 
    compteur = compteur - 1 # Très important ! 
print("Décollage !")
```

Explication : Tant que le compteur est strictement supérieur à 0, on l'affiche, puis on le diminue de 1.

## III/ Le danger de la boucle infinie 
Que se passe-t-il si on oublie la ligne "compteur = compteur - 1" dans l'exemple précédent ?  
Le compteur reste à 5.  La condition "5 > 0" est toujours Vraie.  
L'ordinateur va afficher 5 à l'infini jusqu'à ce que le programme plante ou que vous l'arrêtiez de force. 

**⚠️ Règle d'or :**
 Assurez-vous toujours que la condition finira par devenir Fausse !

## EXERCICES D'APPLICATION DIRECTE :

Écris un programme avec une variable reponse = "". Tant que reponse n'est pas égale à "oui", demande à l'utilisateur "Voulez-vous arrêter ?" (avec input()) et mets à jour la variable reponse.