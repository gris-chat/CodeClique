# Chapitre 3 - QUIZZ : Les fonctions

### ⭐ 1. Quel mot-clé est utilisé pour définir une fonction en Python ?
a) `function`
b) `def`
c) `define`
d) `func`

**Correction :**
réponse b) `def`
C'est le mot-clé réservé par Python. N'oubliez pas les deux points `:` à la fin !

### ⭐ 2. Qu'affiche ce code ?
```python
def ma_fonction():
    x = 5

print(ma_fonction())
```
a) 5
b) x
c) None (ou rien)
d) Erreur

**Correction :**
réponse c) None
La fonction n'a pas de `return`. Par défaut, une fonction Python renvoie `None` (qui signifie "vide" ou "rien") si on ne lui dit pas de renvoyer autre chose.

### ⭐⭐ 3. Si j'ai `def calcul(a, b):`, comment j'appelle cette fonction correctement ?
a) `calcul`
b) `calcul(3, 4)`
c) `calcul[3, 4]`
d) `calcul(a=3)`

**Correction :**
réponse b) `calcul(3, 4)`
Il faut donner une valeur pour `a` ET une valeur pour `b`, séparées par une virgule, entre parenthèses.

### ⭐⭐ 4. Laquelle de ces fonctions est correcte pour renvoyer le carré d'un nombre ?
a)
```python
def carre(x):
    print(x * x)
```
b)
```python
def carre(x):
    return x * x
```

**Correction :**
réponse b)
La réponse a) AFFICHE le résultat mais ne le RENVOIE pas. Si on veut réutiliser le résultat pour un autre calcul, il faut utiliser `return`.
