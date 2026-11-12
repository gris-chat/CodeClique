# Chapitre 2 - Partie 1 : Les bibliothèques

## 1. Définition
Une **bibliothèque** en Python est un ensemble de fonctions déjà existantes que l’on peut utiliser dans son propre programme. Une bibliothèque est comme une **boîte à outils**. Chaque outil sert à faire une tâche spécifique que l’on peut utiliser si besoin dans son programme.
:::outline{outlineType="EXEMPLE"}
Par exemple, dans la bibliothèque *math*, on y trouve la fonction *math.sqrt(x)* qui permet de calculer la racine carré de x. Ainsi, si dans un programme, on a besoin de calculer la racine carré d’une variable, il est possible d’utiliser directement la fonction *sqrt(x)* de la bibliothèque *math*.
:::
## 2. Comment utiliser une bibliothèque ?
Pour utiliser une fonction d’une bibliothèque, il faut d'abord importer la bibliothèque. On peut ensuite utiliser la fonction.
### a) Importation d’une bibliothèque
Pour importer une bibliothèque, il faut utiliser le mot clé *import*.
* Si on a besoin que d’**une seule fonction** comme la fonction *sqrt* de la bibliothèque *math*, on écrit :
```python
from math import sqrt
```
* Si on a besoin d’**un nombre limité de fonctions** d’une même bibliothèque, comme les fonctions *sqrt*, *cos* et *sin* de la bibliothèque *math*, on écrit :
```python
from math import sqrt,cos,sin
```
* Si on a besoin que d’**un grand nombre de fonctions** d’une bibliothèque, on utilise le caractère * :
```python
from math import *
```
* Une autre méthode consiste à importer la **bibliothèque entière**. La différence avec les cas précédents est que lors de l’**appel à une fonction de la bibliothèque, il faut préciser le nom de la bibliothèque** dont elle est issue (écrire *math.sqrt(x)*, au lieu de juste *sqrt(x)*). Si l'on ne fait pas cela, le programme ne comprendra pas où est codée la fonction puisque ce n'est pas directement dans le programme.
	Pour alléger la notation, il est possible de surnommer la bibliothèque par un nom plus court en utilisant le mot clé *as*.
	
	Dans l’exemple suivant, la bibliothèque *math* est importé sous le nom *m*
```python
import math as m
```
### b) Appel d’une fonction d’une bibliothèque
**Cas 1** : Dans les trois premiers cas, les fonctions de la bibliothèque sont directement importées dans le programme. Les fonctions peuvent alors être **directement appelés par leur nom** :
:::outline{outlineType="EXEMPLE"}
```python
from math import sqrt
x=sqrt(4)
print(x)
```
:::
**Cas 2** : Dans le dernier cas, c’est la bibliothèque qui est importée. Pour appeler une fonction de la bibliothèque, il faut alors préfixer le nom de la fonction par le nom de la bibliothèque. De plus, si la bibliothèque a été surnommée, on utilise le surnom de la bibliothèque à la place du nom.
:::outline{outlineType="EXEMPLE"}
```python
import math
x=math.sqrt(4)
print(x)
```
OU
```python
import math as m
x=m.sqrt(4)
print(x)
```
:::
:::outline{outlineType="RETENIR"}
| Type d’importation | Structure | Appel de fonction|
|--------------------------|----------------------------|-------------------------|
|Une seule fonction de la bibliothèque |`from` *bibliothèque* `import` *fonction*| *fonction*()|
|Plusieurs fonctions de la bibliothèque |`from` *bibliothèque* `import` *fonction1*, *fonction2*| *fonction1*()|
|Un grand nombre de fonctions de la bibliothèque|`from` *bibliothèque* `import` *| *fonction*()|
|La bibliothèque en entier |`import` *bibliothèque* `as` *surnom*| *surnom*.*fonction*()|
:::




