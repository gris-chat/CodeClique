# Chapitre 3 - Partie 1 : Calcul des termes d'une suite

## Vidéo : La suite de Fibonacci

::video{link="https://www.youtube-nocookie.com/embed/lqMf1HtW9Ys?rel=0&modestbranding=1&iv_load_policy=3"}

### Définition suite
En première, on voit deux manières d'expliciter une suite : par **formule explicite** ou avec une **relation de récurrence et un terme initial** (ou des termes initiaux en fonction de la relation de récurrence).


:::outline{outlineType="EXEMPLE"}


**Formule explicite** : $$u_n = 2 \times n + 1$$


**Relation de récurrence** : $$u_{n+1} = u_n + 4$$
:::


## I- Formule explicite
*<ins>Idée générale</ins> : Calculer le terme voulu sans calcul intermédiaire*


Dans ce cas précis, il suffit d'un **calcul** pour obtenir le résultat. En effet, il faut juste remplacer chaque apparition de $n$ dans l'expression par le numéro du terme que l'on souhaite.

:::outline{outlineType="RETENIR"}
### Méthode
* Calculer dans une variable le terme avec formule explicite
:::


:::outline{outlineType="EXEMPLE"}
On pose $u_n = 3n + 4$ pour tout entier naturel $n$, calculer et afficher $u_7$. Puis, écrire une fonction qui calcule le $n$-ième terme de la suite $(u_n)$.
```python
u7 = 3*7+6   #Calcul du terme u7
print(u7)    #Affichage du terme
```
Puis la fonction :
```python
def Un(n):         #Création de la fonction
   un = 3*n+6      #Calcul du terme Un
   return un
   
print(Un(7))       #On affiche le resultat de la fonction pour n = 7
```
:::


## II - Relation de récurrence
*<ins>Idée générale</ins> : Calculer tous les termes précédant le terme voulu*


L’essentiel de la méthode est de **calculer un à un** les termes qui précèdent celui souhaité.


Pour une relation de récurrence $u_n = f(u_{n-1})$, il suffit d’avoir $u_{n-1}$ . Or pour avoir $u_{n-1}$ , puisque $u_{n-1}=f(u_{n-2})$ , il suffit de connaître $u_{n-2}$ , et ainsi de suite jusqu’au terme initial.


:::outline{outlineType="EXEMPLE"}
Si on veut calculer $u_3$ de la suite $(u_n)$ définie par la relation $$u_n=2 \times u_{n-1}+2$$ et $$u_0=5$$
On a : $$u_3 = 2 \times u_2+2$$


Or, $$u_2 = 2 \times u1+2$$


Et $$u_1 = 2 \times u_0 + 2 = 2 \times 5 + 2 = 12$$
Donc en remontant :
$$u_2 = 2 \times 12 + 2 = 26$$ Donc $$u_3 = 2 \times 26 + 2 = 54$$
:::


On va maintenant écrire cet algorithme en Python !

### Idée du programme :
Plutôt que de remonter à $u_{n-1}$ , $u_{n-2}$, et ainsi de suite, on va **partir de $u_0$** et appliquer la relation de récurrence étape par étape pour arriver au final au terme souhaité.
 Pour cela, on va utiliser une **boucle `for`**. Ainsi, nous appliquerons $n$ fois la formule de récurrence pour arriver au $n$-ième terme.
  La difficulté ici est de **conserver le terme** obtenu à la fin de chaque exécution de la boucle. Autrement dit, on veut retenir le résultat de l'application de la formule de récurrence pour le réutiliser après.
  Pour régler ce problème nous allons introduire une **variable intermédiaire** qui à chaque fin de tour contiendra le terme calculé.

:::outline{outlineType="RETENIR"}
### Méthode
* Initialiser dans une variable le terme initial
* Initialiser une boucle for (intelligemment)
* Dans la boucle for, écrire la relation de récurrence pour calculer le terme suivant
* A la sortie de la boucle for, afficher ou renvoyer le terme voulu
:::


Dans chaque boucle, un terme de la suite est calculé et c’est à partir de ce terme-ci que le prochain terme est calculé.


:::outline{outlineType="EXEMPLE"}
On pose $u_n=5u_{n-1} + 2$ avec $u_0 = 3$ pour tout n entier naturel. Calculer $u_8$. Puis, écrire une fonction qui calcule le $n$-ième terme de la suite $(u_n)$.


```python
un= 3                       # Initialisation représentant la variable initiale
for i in range(7):      # Initialisation de la boucle for
   un = 5*un + 2       # Relation de récurrence
print(un)               # Affichage du terme


```


Puis la fonction :
```python
def Un(n) :                 # Création de la fonction
   un=3                    # Initialisation représentant la variable initiale
   for i in range(n):      # Initialisation de la boucle for
       un = 5*un + 2       # Relation de récurrence
   return un               # Renvoi du terme

print(Un(7))
```
:::


:::outline{outlineType="ATTENTION"}
**Attention**


* La variable contenant la variable initiale doit être la **même** que dans la **relation de récurrence**
* Il ne faut pas oublier de **modifier** la valeur qui au départ était initialisée, sinon c’est toujours le **même terme** qui sera calculé
* Attention au terme initial : **ce n’est pas toujours u0** qui est le terme initial !De ce fait, il faut veiller à **bien borner**la boucle for
:::


:::outline{outlineType="REMARQUE"}
Le calcul d’un terme est nettement plus rapide pour une suite définie avec une formule explicite donc si vous avez le choix, choisissez la méthode avec la formule explicite, pas besoin de se compliquer la tâche avec la relation de récurrence.
:::


:::outline{outlineType="RETENIR"}


Lorsque vous souhaitez calculer un terme d’une suite, il faut d’abord se poser la question : **“Comment est-elle définie ?”**.




Dans le cas d’une formule explicite, le $n$-ième terme peut être calculé directement en **remplaçant $n$** dans l’expression par le terme visé.




Si l’on possède une relation de récurrence, il faut **partir du premier terme** et appliquer la relation de récurrence plusieurs fois jusqu’à arriver au $n$-ième terme.
:::

