

# Chapitre 1 - Partie 2 : génération d'arrangement avec la formule de Pascal

## Vidéo : Permutation

::video{link="https://www.youtube-nocookie.com/embed/0CLB0XhaJY0?rel=0&modestbranding=1&iv_load_policy=3"}

## Introduction

Le nombre d'arrangement peut être noté $\binom{n}{k}$ ou $\mathrm{C}_{n}^{k}$, il correspond au nombre de parties ordonnées de k éléments dans un ensemble de n éléments. Concrêtement cela représente le nombre de manières différentes dont on peut séléctionner $k$ éléments parmis $n$ éléments. Par exemple, dans une assemblée de 30 personnes on doit créer un goupe de 4, dans ce cas le nombre de groupes différents possibles vaut $\binom{30}{4}$

:::outline{outlineType="REMARQUE"} 
$\binom{n}{k}$ = $\binom{n}{n-k}$ car choisir un groupe de k personne parmi n equivaut a choisir k-n personne qui ne seront pas dans ce groupe. Ainsi,
$\binom{n}{n}$ = $\binom{n}{0} = 1$ (on ne peut faire qu'un groupe de n personnes parmis n personnes)
$\binom{n}{1}$ = $\binom{n}{n-1} = n$ (on peut faire n groupes de 1 personnes parmis $n$ personnes)
:::

Dans cette partie on va donc chercher à calculer $\binom{k}{n}$, et pour ça on utilisera le triangle de Pascal.

![image](https://major-prepa.com/wp-content/uploads/2024/08/expli-triangle-formule.png)

Ici en vert cela montre que $binom{1}{3} = binom{1}{2} + binom{0}{2}$
En généralisant ça, on obtient la formule de Pascal $\binom{k}{n}$ = $\binom{k-1}{n-1}+$\binom{k}{n-1}$


## Méthode itérative

Pour calculer $\binom{k}{n}$ sur Python on va donc calculer les coefficients du triangle nécessaire.

**Méthode:**
* Initialiser la première ligne du triangle
* faire une boucles for pour contruire les lignes suivantes
* Initialiser la ligne avec le 1 
* Construire les termes suivants de la liste grace à la formule de Pascal
* Rajouter le 1 final de la ligne
* Ajouter la ligne au triangle
* Récupérer le terme voulu

**Exemple:**

```python
def binome(n, k):
    triangle = [[1]] 
    for i in range(1, n + 1): 
        ligne = [1]
        for j in range(1, i):
            ligne.append(triangle[i-1][j-1] + triangle[i-1][j])
        ligne.append(1)
        triangle.append(ligne)
    return triangle[n][k]
```

**Exercice 1:**

Sans regarder l'exemple ci-dessus, écrire les lignes de codes permettant de calculer $\binom{5}{10}$ de manière itérative.

## Méthode récursive (pour aller plus loin)


Il existe une autre méthode pour calculer ces coefficients: la méthode récursive.
Le principe est d'utiliser la fonction lorsqu'on la définie. 

**Méthode:**
* Initialiser la fonction à l'aide des coefficients déjà connus (les 0 lorsque k>n et 1 aux extrémités)
* Utiliser la fonction pour écrire la formule de Pascal

**Exemple:**

```python
def binome(k,n):
	if k>n:
		binome(k,n)=0
	if k==n or k==0  :
		binome(k,n)=1
	binome(k,n) = binome(k-1,n-1) + binome(k,n-1)
	return binome(k,n)
```

