# Chapitre 2 - Partie 2 : La bibliothèque NumPy


## 1. Qu’est-ce que NumPy ?
**NumPy** est une bibliothèque en python qui sert à travailler avec des tableaux de nombres et faire des calculs mathématiques. 

Généralement, pour importer la bibliothèque NumPy, on écrit : `import numpy as np`

## 2. Les tableaux
**La bibliothèque Numpy** permet de créer et utiliser **un tableau de type array**. Un tableau est comme une liste à la différence qu’un tableau a une taille fixe et que chaque élément du tableau est du même type. 

Pour créer un tableau, on utilise la fonction *array(t)* de la bibliothèque NumPy : 
:::outline{outlineType="EXEMPLE"}
```python
import numpy as np

tableau=np.array([1,2,3,4])
print(tableau)
```
Dans cet exemple, la variable est alors de type *array*. 
:::

## 3. Calculs avec NumPy
La bibliothèque NumPy peut faire des calculs utiles : 
* **Calcul de moyenne** : la fonction *mean(t)* permet de calculer la moyenne des valeurs du tableau *t*
* **Maximum** : la fonction *max(t)* permet d’obtenir la plus haute valeur du tableau *t*
* **Minimum** : la fonction *min(t)* permet d’obtenir la plus haute valeur du tableau *t*
* **Valeur de π** : la variable *pi* permet d’obtenir la valeur du nombre π.

:::outline{outlineType="ATTENTION"}
Il s’agit d’une variable et non d’une fonction, il n’y a donc pas de parenthèses ! Mais il faut quand même préfixer la variable par *numpy* ou le raccourci *np*.
:::

:::outline{outlineType="EXEMPLE"}
```python
import numpy as np

tableau=np.array([1,2,3,4])
moyenne=np.mean(tableau)
maximum=np.max(tableau)
minimum=np.min(tableau)
print("La moyenne du tableau est : ",moyenne)
print("La plus grande valeur du tableau est : ",maximum)
print("La plus petite valeur du tableau est : ",minimum)
print("Pi est égale à : ", np.pi)
```
Dans cet exemple, la variable est alors de type *array*. 
:::


