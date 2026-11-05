# Chapitre 2 - Partie 3 : les boucles - for

## INTRODUCTION 
Contrairement au while, la boucle for est une boucle "bornée". On l'utilise quand on sait à l'avance combien de fois on veut répéter une action, ou pour parcourir des éléments un par un.

## I/ La fonction range() 
Pour faire une boucle "compteur", on utilise souvent la fonction ```range()```.

```range(5)``` génère : 0, 1, 2, 3, 4 (Attention, on s'arrête avant le nombre final !)

```range(1,4)``` génère : 1, 2, 3

## II/ Syntaxe de la boucle for 
On dit : "Pour chaque variable 'i' dans la plage donnée..."

**Syntaxe :**
```python
for i in range(n) : 
    # Instructions répétées n fois
```

**Exemple :** 
```python
for i in range(3): 
    print("Je suis un tour de boucle") 
    print("i vaut :", i)
```

**Résultat :** 
```
Je suis un tour de boucle i vaut : 0 
Je suis un tour de boucle i vaut : 1 
Je suis un tour de boucle i vaut : 2
```

## III/ Paramètres avancés de range 
On peut définir le pas (le saut) de la boucle : ```range(début, fin, pas)```

**Exemple pour afficher les nombres pairs de 0 à 10 :** 
```python
for i in range(0, 11, 2): 
    print(i)
```

## EXERCICES D'APPLICATION DIRECTE :

1) Affiche la table de multiplication de 7 (de 1 à 10) en utilisant une boucle for.

2) Calcule la somme des entiers de 1 à 100 (1+2+...+100) avec une boucle for et une variable somme.