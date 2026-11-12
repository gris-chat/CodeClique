# Chapitre 2 - Partie 3 : les boucles - for
Contrairement au *while*, la boucle *for* est **une boucle "bornée"**. On l'utilise quand on sait à l'avance combien de fois on veut répéter une action, ou pour parcourir des éléments un par un.
## I/ La fonction range()
Pour faire une boucle "compteur", on utilise la fonction *range()*, telle que *range(debut, fin),* où un suite croissante de nombres commençant par début, puis son nombre consécutif, puis ainsi de suite jusqu’à fin exclue. 

:::outline{outlineType="EXEMPLE"}
**range(5)** génère : 0, 1, 2, 3, 4 (Attention, on s'arrête avant le nombre final !)

**range(1,4)** génère : 1, 2, 3
:::
## II/ Syntaxe de la boucle for
On dit : "Pour chaque variable *'i'* dans la plage donnée..." et par la suite les instructions sont exécutées pour chaque valeur que prend *i* à la suite. En effet, la variable *i* va prendre toutes les valeurs dans l’ordre de la suite qui suit. Par exemple, pour une suite `[1,2,3]`, *i* va prendre la valeur 1, exécuter les instructions suivantes avec *i = 1*, puis *i* prend la valeur 2 et exécuter les instructions avec *i = 2* et ainsi de suite.

:::outline{outlineType="RETENIR"}
**Syntaxe** :
```python
for i in range(n) : 
    # Instructions répétées n fois
```
:::

:::outline{outlineType="ATTENTION"}
* Ne pas oublier les deux points ":" à la fin de la ligne du for !
* L'indentation (le décalage vers la droite) est encore obligatoire ! C'est elle qui dit à Python : "cette ligne fait partie de la boucle".
:::

:::outline{outlineType="EXEMPLE"}
```python
for i in range(3): 
    print("Je suis un tour de boucle") 
    print("i vaut :", i)
```
:::
## III/ Paramètres avancés de range
On peut définir le **pas** ou le **saut** de la boucle : *range(début, fin, pas)*. C’est-à-dire que le compteur n’avancera plus de 1 en 1 mais de pas en pas. Pour un pas égal à p, le compteur commence par prendre la valeur début, puis début+p, et ainsi de suite tant que le compteur est strictement inférieur à fin. 

:::outline{outlineType="EXEMPLE"}
Exemple pour afficher les nombres pairs de 0 à 10 :
```python
for i in range(0, 11, 2): 
    print(i)
```
:::
## EXERCICES D'APPLICATION DIRECTE :
1. Affiche la table de multiplication de 7 (de 1 à 10) en utilisant une boucle *for*.
```python
```

2. Calcule la somme des entiers de 1 à 100 (1+2+...+100) avec une boucle *for* et une variable *somme*.
```python
```


