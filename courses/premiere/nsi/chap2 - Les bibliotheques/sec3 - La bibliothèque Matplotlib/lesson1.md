# PG2 - Chapitre 2 - Partie 3 : La bibliothèque Matplotlib
C'est une bibliothèque Python qui permet de créer des graphiques. En mathématiques, c'est l'outil idéal pour visualiser des fonctions, représenter les termes d'une suite.

Pour l'utiliser, il faut toujours commencer son programme par la ligne : `import matplotlib.pyplot as plt` 

:::outline{outlineType="INFORMATION"}
Il est d’usage de la nommer *plt*.
:::

**Le principe de base** : On fournit à Python une liste d'abscisses  et une liste d'ordonnées, et il place les points dans un repère.

## I/ Tracer un nuage de points
*<u>Idée générale</u> * : *Représenter des données discrètes.
Explications : C'est particulièrement utile pour représenter les termes d'une suite numérique $U_n$​ en fonction de n, ou pour faire des statistiques à deux variables. Les points ne sont pas reliés entre eux.*

:::outline{outlineType="RETENIR"}

Méthode générale :
1. Créer une liste *X* pour les abscisses.
2. Créer une liste *Y* pour les ordonnées qui doit avoir la même taille que *X*.
3. Utiliser l'instruction `plt.plot(X, Y, 'o')`; positionne les points et les relie entre eux par un tracé. Ou utiliser `plt.scatter(X, Y, 'o')` pour afficher un nuage de points. 

:::outline{outlineType="REMARQUE"}
Remarque : Le 'o' désigne le motif utilisé pour les points.
:::

4. Utiliser l'instruction `plt.show()` pour afficher la fenêtre graphique.
:::

:::outline{outlineType="EXEMPLE"}

Exemples:
```python
import matplotlib.pyplot as plt

# Représentation des 4 premiers termes d'une suite
liste_n = [0, 1, 2, 3] #liste des indices de la suite
liste_un = [2, 5, 8, 11] #liste des valeurs de la suite

plt.plot(liste_n, liste_un, 'o', color='red') # Points ronds et rouges
plt.show() # Affiche le graphique
```
:::

:::outline{outlineType="REMARQUE"}
Remarque: La fonction lit les listes de gauche à droite. Le premier point placé sera de coordonnées (0,2), puis (1,5), etc.
:::

**EXERCICES**:

**Exercice 1** : Écrire un programme Python qui trace le nuage de points des coordonnées suivantes : A(−1,4), B(2,5), et C(4,−2).

**Exercice 2** : Soit la suite définie par $u_n$ ​= $n^2$. À l'aide d'une boucle *for*, générer la liste des 10 premiers termes de la suite, puis les afficher sur un graphique sous forme de croix ('x').

## II/ Tracer une courbe continue
*<u>Idée générale</u>* : *Représenter la courbe représentative d'une fonction mathématique y=f(x).*

*Explications* : En Python, on ne peut pas tracer de "vraies" courbes continues. L'astuce consiste à calculer énormément de points très rapprochés et à demander à Python de les relier par des segments de droites. À l'œil nu, cela ressemblera à une courbe lisse.

:::outline{outlineType="RETENIR"}
**Méthode générale** :
1. Créer une liste *X* contenant beaucoup de valeurs d'abscisses rapprochées.
2. Créer la liste *Y* contenant les images de chaque x par la fonction f.
3. Utiliser l'instruction `plt.plot(X, Y)` (sans préciser de forme de point, Python reliera les points par une ligne par défaut).
4. Afficher avec `plt.show()`.
:::

:::outline{outlineType="EXEMPLE"}

**Exemples** :
Tracer la fonction f(x) = $x^2$ sur l'intervalle [-5, 5].
```python
import matplotlib.pyplot as plt

X = []
Y = []

# On génère des abscisses de -5 à 5 avec un pas de 0.1
x = -5
while x <= 5:
    X.append(x)
    Y.append(x**2) # Calcul de l'image
    x = x + 0.1

plt.plot(X, Y, color='blue') # Ligne continue bleue
plt.show()
```

*Commentaires* : Plus le "pas" (ici 0.1) est petit, plus la courbe sera précise et lisse. Si le pas est trop grand (ex: 1), la courbe sera "cassée".

**EXERCICES**:

**Exercice 1** : Tracer la droite d'équation y=2x−3 sur l'intervalle [−10,10] avec un pas de 0.1.

**Exercice 2** : Tracer la courbe de la fonction cube f(x)= $x^3$  sur l'intervalle [−3,3] avec un pas de 0.5, puis observer le résultat avec un pas de 0.01.
:::

## III/ Formater son graphique
*<u>Idée générale</u>* : *Rendre compréhensible le graphique pour le lecteur.*

*Explications* : Il faut ajouter un repère visible, nommer les axes et donner un titre au graphique.

:::outline{outlineType="RETENIR"}

Méthode générale : 
On utilise des fonctions additionnelles avant le `plt.show()`.
1. `plt.title("Mon Titre")` : Ajoute un titre.
2. `plt.xlabel("Axe X")` et `plt.ylabel("Axe Y")` : Nomment les axes.
3. `plt.grid()` : Affiche un quadrillage.
:::

:::outline{outlineType="EXEMPLE"}
**Exemples** :
```python
import matplotlib.pyplot as plt

X = [1, 2, 3]
Y = [10, 20, 30]

plt.plot(X, Y)
plt.title("Évolution du chiffre d'affaires")
plt.xlabel("Mois")
plt.ylabel("Milliers d'euros")
plt.grid() # Ajoute la grille pour mieux lire
plt.show()
```
**EXERCICES** :

**Exercice 1** : Reprendre le code de l'exercice sur la fonction cube (Cas 2, Ex 2) et lui ajouter : une grille, le titre "Fonction Cube", l'étiquette "Axe des abscisses" en bas et "Axe des ordonnées" à gauche.
:::

## RÉSUMÉ GLOBAL 
:::outline{outlineType="RETENIR"}
Résumé :
* import matplotlib.pyplot as plt` en début de code.
* `plt.plot(X, Y)` pour relier des points .
* `plt.scatter(X, Y)` pour ne pas les relier.
* L'habillage comme les mots clés *title*, *grid*, etc. se fait avant l'affichage.
* `plt.show()` doit obligatoirement être la toute **dernière ligne** de votre code graphique.
:::
:::outline{outlineType="ATTENTION"}
Conseils:
* **Erreur de dimension** (ValueError) : Assurez-vous toujours que votre liste *X* et votre liste *Y* ont exactement le même nombre d'éléments. 
* **Oubli du `plt.show()`** : Le programme tourne sans erreur, mais rien ne s'affiche à l'écran. Pensez à "déclencher" l'affichage.
* **L'ordre des arguments** : C'est toujours `plt.plot(abscisses, ordonnées)`. Ne confondez pas *X* et *Y*.
:::

