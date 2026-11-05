# Chapitre 3 - Exercices : Les fonctions

### ⭐ ESG311 - Exercice 1 : **Le convertisseur**
Crée une fonction `euros_vers_dollards(montant)` qui prend un montant en euros et **renvoie** la valeur en dollars. (On supposera que 1 Euro = 1.10 Dollar).
Utilise-la pour convertir 20 euros.

**Correction**
```python
def euros_vers_dollards(montant):
    resultat = montant * 1.10
    return resultat

# Test
mon_argent = 20
en_dollars = euros_vers_dollards(mon_argent)
print(mon_argent, "euros valent", en_dollars, "dollars.")
```

### ⭐ ESG312 - Exercice 2 : **Aire du rectangle**
Crée une fonction `aire_rectangle(longueur, largeur)` qui calcule et renvoie l'aire (L x l).

**Correction**
```python
def aire_rectangle(longueur, largeur):
    return longueur * largeur

surface = aire_rectangle(10, 5)
print("La surface est de :", surface)
```

### ⭐⭐ ESG321 - Exercice 3 : **Le discriminant**
En maths, pour résoudre ax² + bx + c = 0, on calcule le delta.
Crée une fonction `calculer_delta(a, b, c)` qui renvoie la valeur de b² - 4ac.

**Correction :**
```python
def calculer_delta(a, b, c):
    delta = b**2 - 4*a*c   # b**2 veut dire b au carré
    return delta

# Test pour x² + 2x + 1 (a=1, b=2, c=1) -> delta devrait être 0
print(calculer_delta(1, 2, 1)) 
```

### ⭐⭐ ESG322 - Exercice 4 : **Table de multiplication**
Crée une fonction `afficher_table(n)` qui ne renvoie rien mais **affiche** la table de multiplication de n (de 1 à 10) à l'aide d'une boucle `for`.

**Correction**
```python
def afficher_table(n):
    print("Table de", n, ":")
    for i in range(1, 11):
        resultat = n * i
        print(n, "x", i, "=", resultat)

afficher_table(7)
```

### ⭐⭐⭐ ESG301 - Exercice 5 : **Le maximum**
Sans utiliser la fonction `max()` de Python, crée ta propre fonction `mon_max(a, b)` qui prend deux nombres et renvoie le plus grand des deux.
*Indice : utilise une condition if/else.*

**Correction**
```python
def mon_max(a, b):
    if a > b:
        return a
    else:
        return b

plus_grand = mon_max(15, 8)
print("Le plus grand est :", plus_grand)
```
