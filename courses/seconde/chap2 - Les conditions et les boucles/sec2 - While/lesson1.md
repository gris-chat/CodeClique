# Chapitre 2 - Partie 2 : les boucles - while
Imaginez que vous deviez copier 100 fois "Je ne dois pas bavarder en classe". C'est long et ennuyeux à écrire. Ainsi, pour éviter d’écrire ligne par ligne, on utilise en programmation des "boucles" pour répéter des instructions. Il existe deux types de boucles. Ici, nous voyons une première boucle qui est la **boucle non bornée** : le **while** qui représente le *“tant que”*.
## I/ Le principe du "Tant que"
La boucle *while* permet de répéter un bloc d'instructions tant qu'une condition reste vraie. On ne sait pas forcément à l'avance combien de fois on va tourner dans la boucle mais tant que la condition est vérifiée les instructions se trouvant dans la boucle sont exécutées. 

:::outline{outlineType="RETENIR"}
**Syntaxe** :
```python
while condition : 
    # Instructions à répéter
```
:::

:::outline{outlineType="ATTENTION"}
* Ne pas oublier les deux points ":" après la condition du while !
* L'indentation (le décalage vers la droite) est aussi obligatoire ! C'est elle qui dit à Python : "cette ligne fait partie de la boucle".
:::
## II/ Exemple concret : Création d’un compte à rebours.
:::outline{outlineType="RETENIR"}
**Syntaxe** : 
```python
compteur = 5 
while compteur > 0: 
    print(compteur) 
    compteur = compteur - 1 # Très important ! 
print("Décollage !")
```

**Explication** : Tant que le compteur est strictement supérieur à 0, on l'affiche, puis on le diminue de 1.
:::
## III/ Le danger de la boucle infinie
Que se passe-t-il si on oublie la ligne `compteur = compteur - 1` dans l'exemple précédent ?
Le compteur reste à 5. Alors la condition `5 > 0` est toujours vraie et l'ordinateur va afficher 5 jusqu'à l’infini. Il faut alors arrêter de force l’exécution du programme ! Il faut donc éviter à tout prix de faire une boucle infinie !

:::outline{outlineType="ATTENTION"}
**Règle d'or** : Assurez-vous toujours que la condition finisse par devenir fausse ! 
:::

:::outline{outlineType="ERREUR"}
* Oublier les indentations ! 
:::


