# PG3 - Chapitre 3 - Partie 1 : Approximation de pi par la méthode d'Archimède

Dans cette troisième partie, nous allons utiliser le langage Python pour approcher la valeur de $\pi$ grâce à une méthode géométrique : la méthode d'Archimède. 
En algorithmique, ce problème est un grand classique car il permet de travailler sur **le calcul itératif** et **l'actualisation simultanée de variables**. 

## I/ Fonctionnement de la méthode d’Archimède

*Idée générale* : Archimède a encadré le périmètre d'un cercle de rayon 1 par les périmètres de polygones réguliers inscrits et exinscrits. En doublant successivement le nombre de côtés (en partant d'un hexagone), on obtient deux suites Un et Vn correspondant aux demi-périmètres, qui convergent toutes les deux vers $\pi$
, car le périmètre d’un demi-cercle de rayon 1 est égale à $\pi$.
Plus simplement dit, en plaçant des polygones de tailles légèrement supérieurs et légèrement inférieurs à un cercle de rayon 1, on obtient un encadrement. Puis, en augmentant le nombre de côtés de chaque polygone, ces derniers se “moulent” au cercle et l’encadrement et encore plus précis

Les relations de récurrence :
* $U_{0} = 3$
* $V_{0} = 2\sqrt{3}$
* $V_{n+1} = \frac{2U_{n}V_{n}}{U_{n}+V_{n}}$
* $U_{n+1} = \sqrt{U_{n}V_{n+1}}$

## II/Implémentation de l’algorithme
*Idée générale* : Il s'agit de calculer les termes successifs des deux suites pour un nombre d'itérations N donné à l'aide d'une boucle for. À chaque étape, les nouvelles valeurs de u et v écrasent les anciennes.

**Subtilités** : La subtilité majeure réside dans l'ordre de calcul. Regardez bien la formule mathématique de $U_{n+1}$: elle nécessite d'utiliser $V_{n+1}$. 
En programmation, il faut donc impérativement calculer et mettre à jour la variable v en premier, puis utiliser cette nouvelle valeur pour calculer la variable u. 
De plus, l'utilisation de la bibliothèque *math* sera nécessaire pour calculer la racine carrée.

:::outline{outlineType="RETENIR"}
Méthode générale :
Importer la fonction *sqrt()* de la bibliothèque math.
Initialiser les variables u et v.
Créer une boucle for tournant N fois.
Dans la boucle, affecter la nouvelle valeur à la variable v.
Toujours dans la boucle, affecter la nouvelle valeur à la variable u en utilisant le v fraîchement calculé.
Retourner u et v.

```python
from math import sqrt

def archimede_pi(n):
    # Initialisation des variables (pour n=0, l'hexagone)
    u = 3
    v = 2 * sqrt(3)
    
    # Boucle de calcul itératif
    for i in range(n):
        v = (2 * u * v) / (u + v)  # Calcul et mise à jour de v
        u = sqrt(u * v)            # Calcul et mise à jour de u (utilise le nouveau v)
        
    return u, v
```

Puis on l'execute : 

```python
print(archimede_pi(5))
```


:::

:::outline{outlineType="EXEMPLE"}
**Exemple** : Coder l’algorithme d’archimède avec 5 tours de boucle et renvoyer l’approximation de pi obtenue.
:::

## III/ Résumé
La méthode d'Archimède illustre le concept mathématique d'encadrement par des suites adjacentes. 
L'objectif algorithmique essentiel de ce chapitre est la maîtrise de l'actualisation des variables. 
:::outline{outlineType="ATTENTION"}
**Conseil crucial** : Faites toujours très attention à l'ordre d'affectation dans vos boucles. 
:::

## EXERCICES 
**Exercice** : En utilisant la fonction *precision_archimede*, déterminez grâce à votre console Python combien d'étapes sont nécessaires pour obtenir les 10 premières décimales exactes de pi.
Exercice : Calculer la surface d’un disque de rayon 3m, avec une valeur de pi approximée à 4 chiffres derrière la virgule.

