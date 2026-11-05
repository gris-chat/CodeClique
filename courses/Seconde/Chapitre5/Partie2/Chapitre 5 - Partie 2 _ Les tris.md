# Chapitre 5 - Partie 2 : Les tris

## INTRODUCTION
Avoir une liste de notes en vrac `[12, 5, 18, 10]`, c'est bien. Mais les avoir dans l'ordre `[5, 10, 12, 18]`, c'est mieux !
Trier une liste est un problème classique en informatique. Il existe des dizaines de façons de le faire (Tri à bulles, Tri fusion, QuickSort...). Ici, nous allons voir le **Tri par sélection**.

## I/ Algorithme - Le Tri par sélection (Selection Sort)

### Idée générale
C'est la méthode "naturelle" quand on range des cartes :
1.  On cherche la **plus petite carte** de tout le paquet.
2.  On la met **tout devant** (en première position).
3.  On recommence avec le reste du paquet (à partir de la 2ème place).
4.  Et ainsi de suite jusqu'à la fin.

### Méthode générale
On a besoin de deux boucles imbriquées :
*   Une boucle principale qui avance position par position (`i` allant du début à la fin).
*   Une boucle secondaire qui cherche le plus petit élément parmi ceux qui restent (`j` allant de `i+1` à la fin).

### Exemple commenté
```python
def tri_selection(liste):
    n = len(liste)
    # Pour chaque position i de la liste
    for i in range(n):
        # On suppose que le minimum est à la position i
        min_index = i
        
        # On cherche s'il y a plus petit dans le reste de la liste
        for j in range(i+1, n):
            if liste[j] < liste[min_index]:
                min_index = j # On a trouvé un nouveau minimum !
        
        # Si le minimum n'était pas déjà à la bonne place, on échange
        if min_index != i:
            # Échange des variables (swap)
            temp = liste[i]
            liste[i] = liste[min_index]
            liste[min_index] = temp

# Test
mes_notes = [12, 5, 18, 10]
tri_selection(mes_notes)
print(mes_notes) # Affiche [5, 10, 12, 18]
```

## II/ Comprendre l'échange (Swap)
En Python, échanger deux variables `a` et `b` peut se faire de façon élégante :
```python
a, b = b, a
```
Dans l'algorithme ci-dessus, on peut remplacer le bloc "temp" par :
`liste[i], liste[min_index] = liste[min_index], liste[i]`

## EXERCICES D'APPLICATION DIRECTE :
1) Copie la fonction de tri et teste-la avec une liste de 10 nombres aléatoires.
2) Modifie la condition `if liste[j] < liste[min_index]` pour trier dans l'ordre **décroissant** (du plus grand au plus petit).
