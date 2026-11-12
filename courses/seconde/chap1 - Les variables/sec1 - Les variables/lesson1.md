# Chapitre 1 - Partie 1 : les variables

## Vidéo d'introduction

::video{link="https://www.youtube-nocookie.com/embed/KT6v9_X9w3M?rel=0&modestbranding=1&iv_load_policy=3"}

Python est un langage de programmation, c’est-à-dire un langage qui permet de communiquer avec l’ordinateur pour que l’ordinateur accomplisse des actions. Ainsi, comme toutes les langues et tous les langages, Python est constitué de “phrases”. En programmation, une “phrase” est équivalente à une ligne de code et chaque ligne de code correspond à une action que nous voudrions que l’ordinateur exécute. 
## I/ Définition

Par exemple, voici une ligne de code : 
```python
a = 5
```
Cette ligne de code c’est : **l’affectation d’une variable**.
On a créé une « boîte » qui s’appelle *a* dans laquelle on peut ranger quelque chose.
Et ici on a rangé dans la boîte appelée *a* l’entier 5.
En clair, « a » c’est une **variable** et 5 c’est son **contenu**.
## II/ Manipulation	

Le but quand on écrit du code, c’est de manipuler le contenu des variables.
Pour manipuler les variables, on utilise l’**affectation**. C’est le fait de donner un contenu à une **variable** :
* On utilise toujours « = » (l’opérateur égal)
* On met toujours la **variable à gauche**
* On met toujours le **contenu à droite**.
 
:::outline{outlineType="EXEMPLE"}
Si on souhaite créer une variable x et que l’on veut lui attribuer la valeur 2, on écrit :
```python
x=2
```

Comme pour une boîte classique, on peut changer son contenu. Pour modifier le contenu d’une variable, il suffit de faire la même opération.
:::
:::outline{outlineType="EXEMPLE"}
Si précédemment, on a affecté à la variable x la valeur 2 et que l’on souhaite maintenant que la variable x soit associée à la valeur 3, on écrit :
```python
x=3
```
:::

:::outline{outlineType="ATTENTION"}
En effectuant cette opération, la valeur 2 est complètement oubliée et on ne pourra plus la récupérer car le contenu de x est maintenant 3, soit la dernière affectation faite à x.
:::

Après avoir affecté un contenu à une variable, on peut obtenir le contenu en appelant la variable. C’est-à-dire que si on appelle une variable, c’est son contenu qui est renvoyé. 
Ainsi en reprenant l’exemple précédent, x contient 3. On considère la ligne de code suivante : 
```python
print(x)
```
C’est le contenu qui est renvoyé, soit l’entier 3 !


On peut alors s’amuser à écrire l’exemple ci-dessous :
```python
x = 2
y = x
```
 Si on appelle y, alors 2 est renvoyé car on a mis le contenu de x dans y.

## III/ Nom des variables	

Même si nous avons une certaine liberté dans le choix des noms de variables, quelques règles doivent être respectées.
Un nom de variable peut contenir :
* des lettres de a à z, minuscules ou majuscules ;
* des chiffres (mais pas uniquement) ;
* le caractère underscore « _ ».

:::outline{outlineType="ATTENTION"}
Attention ! Python est *“sensible à la casse”*, c’est-à-dire que les lettres minuscules et majuscules sont différenciées. Par exemple, les variables codeclique et CodeClique sont différentes ! 
:::

En revanche, il est **interdit** de mettre des espaces et un nom de variable ne doit pas commencer par un chiffre. 
Il est également **fortement conseillé** d’éviter : 
* De commencer par un underscore, car ce caractère a une signification particulière en Python. 
* D’utiliser les mots réservés du langage, comme « print », « for » ou « if ». La liste complète des mots réservés sera vue ultérieurement.

Enfin, il est fortement recommandé d’utiliser des noms de variables explicites afin d’améliorer la lisibilité et la compréhension du code.

## EXERCICES : 

Question 1 :  
```python
variable=3
```
Que renvoie variable ?

Question 2 : 
```python
variable = 45
Variable = 56
```
Que renvoie variable ? Et Variable ?

Question 3 :
```python
test = 1
TEST = 0
TEST = test
```
Que renvoie TEST ? Et test ?

Question 4 : 
Quels sont les noms de variables valides ?  
1. ballon d’or 
2. Ballon d’or 
3. ballon_d’or
4. Ballon_d’or
5. ballon_d_or
6. Ballon_d_or
7. _ballon_d_or
8. ballondor
9. BallondOR
10. ballon_DOR_456
11. 8ALLONDOR
12. Ballon08


:::outline{outlineType="RETENIR"}
Une variable est un nom auquel on a associé une valeur. Ce nom suit différentes règles importantes pour que Python comprenne ce que l’on fait. 
Pour affecter une valeur à une variable, on utilise *=* avec le nom de la variable à gauche et le contenu associé à droite.
Les variables peuvent changer de contenu et lorsqu’on les appelle, elles renvoient leur valeur associée qui est la dernière affectée.
:::

A présent, vous savez tout sur comment déclarer et initialiser des variables. Continuez pour découvrir les types de variables ! 

