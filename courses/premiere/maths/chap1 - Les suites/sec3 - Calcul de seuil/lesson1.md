# Chapitre 3 - Partie 3 : Calcul de seuil d’une suite

Calculer le seuil, c'est trouver le moment, c'est-à-dire le rang n, à partir duquel les valeurs d'une suite dépassent un nombre précis appelé le seuil.  
C’est comme se demander : “À quel moment la suite $(U_n)_{n\in\mathbb{N}}$ devient plus grande que 1 000 ?”

*<u>Idée générale</u> :*   
*Pour trouver un seuil, on calcule les termes de la suite les uns après les autres jusqu'à ce que la condition demandée soit vérifiée.*  
	 *Contrairement au calcul d'un terme précis où l'on utilise une boucle for et que le nombre de tours est connu, on utilise ici une boucle while : l'algorithme "tourne" tant que le seuil n'est pas encore atteint.*			

## I/ Calcul de seuil d’une suite définie par une formule explicite

Une suite définie par une formule explicite est une suite auquel existe une formule qui permet de calculer un terme $U_n$ de la suite directement en fonction de son rang n.   
Pour calculer le seuil, le problème c’est que nous ne connaissons pas le rang n du terme que l’on veut calculer. Nous devons alors calculer tous les termes tant que la condition n’est pas vérifiée et dès que c’est le cas, nous avons donc obtenu le terme souhaité \!

**Méthode** : 

* On initialise dans une variable le terme initiale (U0)  
* On initialise une variable le rang du terme (n)  
* On écrit la boucle while avec la négation de la condition (tant que la condition n’est pas vérifiée, on reste dans la boucle)  
* Dans la boucle, on calcule le terme suivant dans la variable un  
* On incrémente la variable du rang pour qu’elle corresponde bien au terme calculé  
* Hors de la boucle, on renvoie la variable du rang

**Pseudo-code :** 

<u>Formule explicite</u> : On pose pour tous n naturels,$\quad U_n = 3n + 4$
```python
# --- INITIALISATION ---   
n = 0           	# Le rang de départ (souvent 0 ou 1\)   
u = ...         	# Calcul du premier terme avec la formule explicite f(n)   

# --- BOUCLE DE RECHERCHE ---   
# On reste dans la boucle TANT QUE la condition n'est PAS encore vérifiée   
while not (condition_voulue):   
	n = n + 1 		# On passe au rang suivant   
	u = ... 		# On recalcule le nouveau terme avec le nouveau n  
print(n)
```

:::outline{outlineType="EXEMPLE"}
Exemple : On pose $U_n$ \= 5n \+ 1 pour tout n entier naturel et $U_0$ \= 3, déterminer à partir de quel rang $U_n$ est-il supérieur ou égale à 100, d’abord sans utiliser une fonction, puis en utilisant une fonction.  

```python
un = 3 				# Initialisation représentant la variable initiale  
n = 0				# Le terme dans la variable un correspond au terme initial, donc au terme de rang 0  
while un < 100 :	# Initialisation de la boucle while avec la négation de la condition  
	un = 5*n + 1	            # Formule explicite  
	n = n + 1		# Incrémentation du rang  
print(n)
```  
Puis la fonction :  

```python
def seuil() :  
	un = 3				# Initialisation représentant la variable initiale  
	n = 0				# Le terme dans la variable un correspond au terme initial, donc au terme de rang 0  
	while un < 100 :	# Initialisation de la boucle while avec la négation de  la condition  
		un = 5*n + 1	# Formule explicite  
		n = n + 1		# Incrémentation du rang  
	return n
	
print(seuil())
```
:::

## II/ Calcul de seuil d’une suite définie par relation de récurrence

Une suite définie par une relation de récurrence est une suite auquel il existe une relation entre un terme et au moins un terme de rang inférieur.   
Pour calculer le seuil, il s’agit de la même idée que pour calculer un terme. La différence est que nous ne connaissons pas le rang du terme seuil, alors au lieu d’utiliser une boucle for, nous utilisons une boucle while.

**Méthode** : 

* Initialiser dans une variable le terme initial   
* Initialiser dans une variable le rang du terme  
* Initialiser une boucle while en prenant la négation de la condition à vérifier.  
* Dans la boucle while, écrire la relation de récurrence pour calculer le terme suivant  
* Dans la boucle while, incrémenter[^1] de 1 la variable correspondant au rang pour que le rang corresponde à celui du terme calculé à la ligne précédente  
* A la sortie de la boucle while, afficher ou renvoyer rang obtenu.

**Syntaxe** :   
```python
Un = #U0		      
n = 0	                                               
while condition :  
	Un = #Relation de récurrence en utilisant la variable Un 
	n = n + 1		  
print(n)
```

:::outline{outlineType="EXEMPLE"}
Exemple : On pose $U_{n+1} = 3U_n + 6$ pour tout n entier naturel et $U_0$ = 2, déterminer à partir de quel rang Un est-il supérieur ou égale à 100, d’abord sans utiliser une fonction, puis en utilisant une fonction.

```python
un = 2			        # Initialisation représentant la variable initiale  
n = 0					# Le terme dans la variable un correspond au terme initial, donc au terme de rang 0  
while un < 100 :		# Initialisation de la boucle while avec la négation de la condition  
	un = 3*un + 6	    # Relation de récurrence  
	n = n + 1			# Incrémentation du rang  
print(n)	
```  

Puis la fonction :   
```python
def seuil() :  
	un = 2				# Initialisation représentant la variable initiale  
	n = 0				# Le terme dans la variable un correspond au terme initial, donc au terme de rang 0  
	while un < 100 :	# Initialisation de la boucle while avec la négation de  la condition  
		un = 3*un + 6	# Relation de récurrence  
		n = n + 1		# Incrémentation du rang  
	return n 
	
print(seuil())
``` 
:::

:::outline{outlineType="ATTENTION"}
ATTENTION \! Si la condition n’est pas vérifiée à partir d’un certain rang, la boucle devient infinie \!\!\!  
:::


[^1]:  Incrémenter \= Augmenter (une variable) d’un certain nombre
