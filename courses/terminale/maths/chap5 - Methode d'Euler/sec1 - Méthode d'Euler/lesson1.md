

# Chapitre  5 - Partie 1 : Méthode d’Euler

## INTRODUCTION

La méthode d’Euler sert à résoudre numériquement des équations différentielles. Une équation différentielle est une équation dans laquelle il intervient une fonction et sa dérivée. Par exemple $y’ = 2y$ est une équation différentielle.

: : : outline{outlineType = “REMARQUE”}
C’est une équation dont l’inconnue est une fonction!!
: : :

Pour résoudre numériquement ce problème comme pour tracer toutes fonctions sur Python la solution prendra la forme d’une liste $Y = [y_1,...,y_n]$ et d’une liste $X = [x_1, ..., x_n]$ (elles représentent respectivement les ordonnées et abscisses de la fonction $y(x)$).

L'idée générale sera toujours la même: pour créer ces listes, on va chercher une expression de $y_{k+1}$ en fonction de $y_k$ Une fois cette expression trouvée, on peut trouver $y_1$ grâce à $y_0$, puis $y_2$ grâce à $y_1$ et ainsi de suite à l’aide d’une boucle for.

Pour trouver l’expression de $y_{k+1}$ , on utilise le taux d’accroissement qui nous donne $y’_{k}= \frac{y_{k+1} - y_k}{h}$ où $h$ est le pas (c’est-à-dire l’écart entre 2 points), plus il est petit et plus la fonction sera précise. En remplaçant $y’$ par cette expression dans l’équation différentielle, on pourra la résoudre.

## Equation du premier ordre:

On considère l’équation différentielle d’inconnue $y$ suivante :
$y’ + ay + b =0$
On cherche à la résoudre sur un intervalle $[u,v]$ (c’est à dire qu’on va tracer la fonction $y$ sur cet intervalle) avec la condition initiale $y(u)=y_0$ et avec un pas $h$ 

**Méthode:**
 
* Initialiser les constantes $(u, v, h, ...)$
* Créer et initialiser $X$ et la remplir à l'aide d'une boucle for
* Créer $Y$ et l'initialiser avec $y_0$
* Sur un brouillon, réécrire l'équation en remplaçant $y'$ par son taux d'accroissement
* Isolez $y_{k+1}$ dans l'équation obtenue
* Créer une boucle for permettant d'ajouter $y_{k+1}$ à la liste $Y$ en fonction de $y_{k}$
* Afficher la fonction grâce à matplotlib (optionnel) 


**La liste X:**

X est la liste des abscisses qui contient les $x_k$,  elle est définie comme $X[k] = x_k = u + kh$ ou encore $X[k+1] = X[k] + h$ avec $X[0] = u$ (On peut remarquer que c’est une suite arithmétique)

| $x_0$ | $x_1$ | . . . | $x_n$  |
| ----- | ----- | ----- | ------ |
| $u$   | $u+h$ | . . . | $u+nh$ |


: : : outline{outlineType = “ATTENTION”}
Ne pas confondre n et h!! $n$ est le nombre de points que l’on aura échantillonné, et h est l’écart entre chaque points, ils sont liés par la relation : $ h = \frac{v-u}{n} $
: : :

: : : outline{outlineType = "EXEMPLE"}
```python
u = 0
v = 1
h = 0.01
n = (v - u) / h
X = [u]
for i in range(0, n-1):
	X[i+1] = X[i] + h
```
: : :

**La liste Y:**

Sur un brouillon, on remplace $y’$ par son taux d’accroissement dans l’équation différentielle et on obtient:
$\frac{y_{k+1}-y_k}{h} + ay_{k} + b =0$
ce qui donne
$y_{k+1} = (-ay_{k} - b) * h + y_k$
Une fois que l’on a cette relation, il ne reste plus qu'à itérer sur les $k$ pour trouver les valeurs de chaque $y_k$

: : : outline{outlineType = "EXEMPLE"}

```python
Y=[y0]
for i in range (0,n-1):
	Y[k+1] = ( -a*Y[k] -b)*h + Y[k]
```

Une fois que l’on a ces deux listes il suffit de tracer la fonction avec: 

```
import matplotlib.pyplot as plt

plt.plot(X,Y)
plt.title(Solution y)
plt.xlabel("x")
plt.ylabel("y(x)")
plt.show()
```

: : :

**Exercice 1:**

Soit l’équation différentielle: $y’ = y$
Résolvez la sur $[-10, 10]$, avec un pas de $0.01$ sachant que $y(-10)=1$
(Aide: Au brouillon réécrivez l’équation en remplaçant y’ par son taux d’accroissement puis isolez $y_{k+1}$)

Solution:

```
import matplotlib.pyplot as plt

h=0.01
n=20/0.01
Y=[1]
X=[-10]
for i in range (0,n-1):
	Y[i+1] = Y[i] * h + Y[i]
	X[i+1] = X[i] + h
	
plt.plot(X,Y)
plt.title(Solution y)
plt.xlabel("x")
plt.ylabel("y(x)")
plt.show()
```

**Exercice 2:**

Résoudre $3y’ + 2y + 1 = 0$ sur $[0,10]$ en prenant pour pas $0.01$ et sachant $y(0)=0$

Solution:
```
import matplotlib.pyplot as plt

h = 0.01
n = 10 / h
Y = [0]
X = [0]
for i in range (0,n-1):
	Y[i+1] = ( - Y[i] * 2 / 3 - 1 / 3) * h + Y[i]
	X[i+1] = X[i] + h

plt.plot(X,Y)
plt.title(Solution y)
plt.xlabel("x")
plt.ylabel("y(x)")
plt.show()
```

: : : outline{outlineType = “RETENIR”}
L'étape clé, c'est de remplacer $y'$ par $\frac{y_{k+1}-y_{k}}{h}$ et $y$ par $y_{k}$ dans l'équation du problème, puis isoler $y_{k+1}$
: : :


## Equation du second ordre 

Pour le second ordre, l’idée générale de passer par le taux d’accroissement est la même, à une petite nuance près.
On considère l’équation différentielle : y’’ + ay’ + by =0
Il est dur remplacer directement y’’ par un taux d'accroissement, on va donc se ramener a un système de 2 équations différentielles d’ordre 1 en posant z = y’:

$$
\begin{cases}
z = y'\\ z' + az+by=0
\end{cases}
$$
(ici on a plus de dérivée seconde)

Notre but est donc de résoudre ce système, c’est-à-dire de trouver les expressions de z_{k+1} et y_{k+1} en fonction de z_{k}et y_{k}.
Pour cela on remplace les dérivées par les taux d’accroissement:

$$
\begin{cases}
z_k = \frac{y_{k+1} - y_{k}}{h} \\
\frac{z_{k+1} - z_{k}}{h} + az_{k} + by_{k} =0
\end{cases}
$$
Puis on isole $y_{k+1}$ et $z_{k+1}$:
$$
\begin{cases}
y[k+1] = z[k] \times h + y[k]
z[k+1] = ( -b \times y[k] - a \times z[k] ) \times h + z[k]
\end{cases}
$$

$$
\begin{cases}
y_{k+1} = z_k  h + y_k \\
z_{k+1} = ( -b  y_k - a z_k ) h + z_k
\end{cases}
$$
Grâce aux 2 conditions initiales on peut résoudre l’équation différentielle 

: : : outline{outlineType = "EXEMPLE"}

On veut résoudre $y'' + y = 0$ sur $[0,10]$ en échantillonnant $500$ points (c'est-à dire $n=500$) et $y(0) = y'(0) = 0$.

```python
import matplotlib.pyplot as plt

n = 500
h = 10 / 500
X = [0]
Y = [0]
Z = [0]

for i in range (0, n-1):
	y[i+1] = z[i] * h + y[i]
	z[i+1] = -y[i] * h + z[i]
	
plt.plot(X,Y)
plt.title(Solution y)
plt.xlabel("x")
plt.ylabel("y(x)")
plt.show()

```

: : :

**Exercice 1:**

Résoudre $ y'' + y' + y = 0$ sur $[0,50]$ avec $y(0) = 1 $ et $y'(0) = 0$ pour un pas $h = 0.01$

Solution:
```python
import matplotlib.pyplot as plt
h = 0.01
X = [0]
Y = [0]
Z = [0]

for i in range (0, n-1):
	y[i+1] = z[i] * h + y[i]
	z[i+1] = -y[i] * h + z[i]
	
plt.plot(X,Y)
plt.title(Solution y)
plt.xlabel("x")
plt.ylabel("y(x)")
plt.show()
```

