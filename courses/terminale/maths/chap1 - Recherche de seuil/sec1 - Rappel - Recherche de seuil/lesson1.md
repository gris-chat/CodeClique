

# TM4 - Chapitre 1 - Partie 1 : Recherche de seuils 


## Introduction

La recherche  de seuils d'une suite c'est le sujet qui tombe chaque année au bac!! Un algorithme de seuil, c'est un algorithme qui permet de donner le rang a partir duquel une suite dépasse un certain seuil. Par exemple, si on considère $ u_n = n^{2}$, et que l'on cherche a partir de quelle range $u_n >= 100$, notre algorithme doit retourner 10.

:::outline{outlineType="REMARQUE"}
On considérera uniquement des suites monotones (qu'elles soient croissantes ou décroissantes)
:::

## Cas d'une suite croissante

**Méthode:**
* Initialiser les variables
* Créer une boucle while pour exprimer que "tant que $u_n$ < seuil, on continue" 
* Mettre a jour $u_n$ dans la boucle
* Metrre a jour n

**Exemple:**

On considère: $\forall n \geqslant 0$
$$\begin{cases}
u_0 = 3 \\
u_{n+1} = 2u_n + 5
\end{cases}$$

La fonction seuil(m) qui retourne le rang $n$ à partir duquel $u_n>m$ s'écrit:

```python
def seuil(m):
	un = 3
	n = 0
	while un <= m :	#Tant qu'on a pas atteint le seuil
		un = 2 * un + 5		#On met à jour un pour la valeur de n suivante
		n = n + 1		#On met a jour n aussi pour pouvoir le récupérer après
	return n			#On est sorti de la boucle, ça signifie qu'on a atteint le rang n recherché
	
```

**Exercice 1:**

On considère la suite $(u_n)$ définie par $u_0 = 2$ et , pour tout entier naturel $n$,
$\begin{cases} u_n+1 = 0 \\ 75u_n + 5 \end{cases} $

On considère la fonction seuil suivante écrite en Python :
```
def seuil() :
	u = 2
	n = 0
	while u < 45 :
		u = 0, 75*u + 5
		n = n + 1
	return n
```
Cette fonction renvoie (il n’y a qu’une seule bonne réponse ):

A. la plus petite valeur de $n$ telle que $u_n ⩾ 45$ 

B. la plus petite valeur de $n$ telle que $u_n < 45$ 

C. la plus grande valeur de $n$ telle que $u_n ⩾ 45$

Solution: C. 


**Exercice 2:**

$\begin{cases} T_0 = -19 \\ T_{n+1} = O.94 T_n + 1.5 \end{cases}$
Ecrire une fonction seuil(x) renvoyant le rang n pour lequel $T_n > x $ ainsi que le plus petit $T_n$ pour lequel on retrouve l’inégalité.

Solution:
```python
def seuil(x):
	n = 0
	Tn = -19
	while Tn <= x:
		n = n + 1
		Tn = 0.94 * Tn + 1.5
	return n, Tn
```

## Cas d'une suite décroissante

La méthode ne change pas, hormis la condition du while qui exprime maintenant " tant que $u_n$ > seuil, on continue " et dès que un passe sous le seuil, on a trouvé notre rang n. Par exemple:
$\forall n \geqslant 0$
$$\begin{cases}
u_0 = -3 \\
u_{n+1} = -2u_n - 5
\end{cases}$$


```python
def seuil(m):
	un = -3
	n = 0
	while un >= m :	#Tant qu'on a pas atteint le seuil
		un = -2 * un - 5		#On met à jour un pour la valeur de n suivante
		n = n - 1		#On met a jour n aussi pour pouvoir le récupérer après
	return n			#On est sorti de la boucle, ça signifie qu'on a atteint le rang n recherché
	
```

:::outline{outlineType="RETENIR"}
La condition dans le while est toujours le contraire de ce que l'on cherche, si on cherche $n$ tel que $u_n$ > 5 on mettre "while un <= 5" dans le code et vice versa
:::

**Exercice 1:**

Soit $\forall n \geqslant 0 \begin{cases} u_0 = 0.6 \\ u_{n+1} = 0.75 u_{n} (1 - 0.15 u_{n}) \end{cases}$

```python
def f():
	u = 0, 6
	n = 0
	while u > 0, 02
		u = 0, 75 ∗ u ∗ (1 − 0, 15 ∗ u)
		n = n + 1
	return n
```

Expliquer ce que renvoie la fonction f?

Solution: 
f renvoie la première valeur de $n$ pour laquelle $u_n <= 0.02$

