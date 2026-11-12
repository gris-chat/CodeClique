# PM1 Chapitre 1 - Partie 2 : Somme des termes d'une suite


*<u>Idée générale</u>* : *Le but ici n’est pas vraiment de sommer **tous** les termes d’une suite (c’est impossible il y en a une infinité, le programme ne s’arrêterait jamais) mais de sommer un **certains nombre de termes**.*


:::outline{outlineType="EXEMPLE"}


Prenons la suite $u_n = 5n$ (on est dans le cas d’une formule explicite).


On veut sommer les 5 premiers termes.


On aura alors :
$S = 5 \times 0 + 5 \times 1 + 5 \times 2 + 5 \times 3 + 5 \times 4 = 0+5+10+15+20 = 50$


:::


On remarque qu’il faut calculer les termes de la suite au **fur et à mesure**. Ainsi, deux cas se présentent :
*  Le cas d’une suite avec formule explicite
* Le cas d’une suite avec une formule de récurrence qui est plus complexe


## I- Formule explicite


Pour calculer une somme de termes, il faut d'abord calculer les termes. On va donc s'inspirer de ce qu'on a vu précédemment.


Pour calculer un terme dans le cas d'une formule explicite, on remplace les $n$ par le numéro du terme voulu.


Ainsi, pour faire la somme de termes on introduit une boucle `for` qui va calculer les termes au fur et à mesure mais aussi les additionner dans une variables tampon pour retenir la somme.


:::outline{outlineType="EXEMPLE"}


Pour reprendre l'exemple précédent, on a une suite explicite $u_n = 5n$ et on veut sommer les 5 premiers termes.


On écrit donc
```python
S = 0   #On initialise la somme à 0 car aucun terme n'a encore été sommé

for i in range(4) :
	un = 5*i
	S = S + un

print(S)
```
:::


## II- Formule de récurrence
Dans le cas d'une formule de récurrence, on a pu voir qu'il y avait déjà besoin d'une boucle pour calculer les termes.


L'idée est de reprendre cette même boucle et d'ajouter au fur et à mesure les termes calculés


:::outline{outlineType="EXEMPLE"}


Prenons la suite suivante : $$u_{n
+1} = 2u_n +3$$ avec $$u_0 = 1$$


On veut encore une fois les 5 premiers termes.


On connaît déjà $u_0$ , il faut maintenant calculer les 4 autres termes.


On a : $u_1 = 2 \times u_0 + 3 = 2 \times 1 + 3 = 5$


Alors, $S_1 = u_0 + u_1 = 6$ (Avec $S_1$ la somme des 2 premiers termes)


On continue ainsi de suite pour calculer la somme finale.


En Python, cela donne :
```python
un_1 = 1  #On retient l u0 pour calculer u1
S = un_1 #On initialise la somme à un_1=1 (car ce terme sera sommé et cela évite de l'oublier)


for i in range (1,4) :  #On va ne faire que 4 tours de boucles car on a déjà pris en compte u0
   un = 2*un_1 + 3  #On calcule le nouveau terme
   un_1 = un  #On retient ce résultat pour le tour suivant
   S = S + un   #On ajoute le nouveau terme à la somme

print(S)

```
:::


:::outline{outlineType="RETENIR"}


* Dans les deux cas il faut utiliser une boucle.
* **Formule explicite** : À chaque tour de boucle on calcule le terme correspondant et on l'ajoute à la somme
* **Formule de récurrence** : De la même manière, à chaque tour de boucle on calcule le nouveau terme (à l'aide de la variable qui contient le résultat du tour précédent). Puis on ajoute ce résultat à la somme


***ATTENTION*** : Il faut bien penser à utiliser une variable pour retenir le résultat du tour de boucle précédent. La machine ne le retient pas toute seule
:::

