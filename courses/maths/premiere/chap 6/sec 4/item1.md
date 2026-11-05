# Chapitre 6 - Partie 4 : Méthode de Newton

Etant donnée une fonction, il peut parfois être difficile de trouver ses zéros. C'est-à-dire de determiner pour quelle valeurs $x$, $f(x)=0$. Ce probleme arrive assez frequeemnt en physique, c'est pourquoi la méthode présentée porte le nom du physiciens Newton ;).

*Idée générale :* 

Il y a des fonctions très simple dont vous savez trouver les zèros depuis la troisième ! Ce sont les fonction de la forme $f(x) = ax + b$. En effet $f(x) =0$ quand $ax+b=0$ donc pour $x= -b / a$. 

Le probleme c'est que notre fonction $f(x)$ n'a a priori aucune raison d'etre sous cette forme. Toutefois dans le cours sur les dérivées vous avez vue qu'on pouvait travers en un point $a$ la tangeante d'une fonction. Cette droite (une droite est le graphe d'une fonction de la forme $ax + b $ avec a la pente et b le saut a l'origine) a pour equation : $y = f'(a)(x - a) + f(a)$.

Or cette tangeant (supposons le) vas intersecter l'axe $y = 0$ pour $x=a-\frac{f(a)}{f'(a)}$. Or ce nouveau point $x$ a des chances d'etre plus proches de la valeur $x_{0}$ du vrai zeros cherchée. 

Ainsi nous allons nous rapprocher du zeros en calculant les itérations de la suite définis par recurence suivante :

$$ x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})} $$


## I/ Définition de la fonction dérivée

On vas se donner une fonction en Python f qui prend un argument et qui renvoie $f(x)$.

```python
# Fonction f

def f(x):
	return x ** 5 - 4 * x + 5
```

Utilisons la définition du taux d'acroissement pour calculer la dérivée $f'(x)$.

```python
# Fonction Df, la dérivée de f

def Df(x):
	h = 0.0001
	return (f(x+h) - f(x)) / h
```

Bien evidement dans la defintion du cours de maths $h$ tend vers $0$, ce qui n'est pas possible à faire avec un ordinateur. Remplacer $h$ par la valeur $0$ reviendrait à diviser par $0$ ce qui est interdit, on vas donc prendre une valeur "faible" pour $h$.



## II/ Calcul des itérations de $x_{n}$

On vas utiliser la relation de récurence etablis dans le preambule.

$$ x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})} $$

**Méthode** : 

* Initialiser dans une variable le terme initial   
* Initialiser dans une variable le nombre maximal d'itérations : variable seuil ici à $1000$
* On attribut une valeur intiale à $x_{n}$.

**Syntaxe** :   
```python
x_n = 10	
seuil = 1000	      
n = 0	                                               
while n < seuil :  
	x_n = x_n - f(x_n) / Df(x_n)
	n = n + 1	

print("Valeur du zéros", x_n, " et valeur de la fonction", f(x_n))
```

Exemple : 

On trouve une valeur $f(x_{n})$ tres proche de $0$. Notre méthode marche :) !!

