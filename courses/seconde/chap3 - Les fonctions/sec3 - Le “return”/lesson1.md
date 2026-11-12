# Chapitre 3 - Partie 3 : Le “return”
A la fin d’une fonction, pour retourner une valeur, on utilise *return*. 
:::outline{outlineType="QUESTION"}
Quelle est alors la différence entre print() et return ? 
:::
Imaginez que vous demandez à votre boulanger le prix d'une baguette de pain, en utilisant : 

* **print()** : Il crie très fort dans la boulangerie "1 EURO !". Tout le monde l'entend, mais vous ne pouvez rien faire avec ce cri.
* **return** : Il vous donne une étiquette avec marqué "1€" dessus. Vous pouvez prendre cette étiquette, la mettre dans votre poche, l'additionner avec le prix d'un croissant, etc.

En programmation, *return* sert à **récupérer** le résultat d'une fonction pour l'utiliser ailleurs.
## I/ L'instruction "return" 
Elle se place à l'intérieur de la fonction, généralement à la fin. Elle arrête immédiatement la fonction et renvoie la valeur.

:::outline{outlineType="RETENIR"}
Syntaxe :
```python
def carre(nombre):
    resultat = nombre * nombre
    return resultat
```
:::
## II/ Récupérer le résultat
Quand on appelle une fonction qui a un *return*, on stocke souvent le résultat dans une variable.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
valeur = 5
mon_resultat = carre(valeur) 		# mon_resultat vaut maintenant 25.
print("Le carré de 5 est", mon_resultat)
```
:::

:::outline{outlineType="RETENIR"}
Comparaison :

```python
def addition_print(a, b):
    print(a + b)

def addition_return(a, b):
    return a + b

res1 = addition_print(3, 4)     # Affiche 7 à l'écran, mais res1 est VIDE (None)

res2 = addition_return(3, 4)    # N'affiche RIEN, mais res2 vaut 7

print(res2 + 10)                # Ça marche ! (7 + 10 = 17)

# print(res1 + 10)              # CRASH ! On ne peut pas additionner "Rien" avec 10.
```
:::
## EXERCICES D'APPLICATION DIRECTE :
1. Crée une fonction *multiplier_par_deux(x)* qui **renvoie** le double de x. Teste-la en calculant le double de 4, puis en multipliant ce résultat par 10.

2. Crée une fonction *est_majeur(age)* qui **renvoie** *True* si l'âge est supérieur ou égale à 18 ans, et *False* sinon.

