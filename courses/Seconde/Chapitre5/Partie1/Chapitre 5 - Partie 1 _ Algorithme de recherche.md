# Chapitre 5 - Partie 1 : Algorithme de recherche

## INTRODUCTION
Imaginez que vous cherchez une carte précise dans un jeu de cartes mélangé. Comment faites-vous ? Vous regardez la première, puis la deuxième, puis la troisième... jusqu'à trouver la bonne.
En informatique, c'est **l'algorithme de recherche séquentielle** (ou parcours séquentiel).

## I/ Algorithme - Cas 1 : Présence d'un élément
**Idée générale :**
On veut savoir si une valeur existe dans une liste.
On parcourt toute la liste. Si on trouve la valeur, on s'arrête et on dit "Trouvé !". Si on arrive à la fin sans avoir rien trouvé, on dit "Pas trouvé".

**Méthode générale :**
1.  Créer une variable booléenne `trouve = False`.
2.  Parcourir la liste avec une boucle `for`.
3.  `if` l'élément actuel est celui qu'on cherche, on met `trouve = True` (et on peut arrêter avec `break`).
4.  À la fin, on regarde la valeur de `trouve`.

**Exemple :**
```python
def est_present(liste, valeur_cherchee):
    found = False
    for element in liste:
        if element == valeur_cherchee:
            found = True
            break # On arrête car on a trouvé
    return found

mes_nombres = [10, 5, 8, 20]
print(est_present(mes_nombres, 8))  # Affiche True
print(est_present(mes_nombres, 12)) # Affiche False
```

## II/ Algorithme - Cas 2 : Recherche de la position (indice)
Parfois, on ne veut pas juste savoir si c'est là, on veut savoir OÙ c'est.

**Méthode générale :**
On utilise `range(len(liste))` pour avoir les indices.

**Exemple :**
```python
def trouver_indice(liste, valeur_cherchee):
    for i in range(len(liste)):
        if liste[i] == valeur_cherchee:
            return i # On renvoie la position immédiatement
    return -1 # Convention : si on ne trouve pas, on renvoie -1

classement = ["Alice", "Bob", "Charlie"]
print(trouver_indice(classement, "Bob")) # Affiche 1
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une fonction `contient_zero(liste)` qui renvoie `True` si la liste contient le nombre 0, `False` sinon.

2) Crée une liste de mois. Cherche l'indice du mois "Juin".
