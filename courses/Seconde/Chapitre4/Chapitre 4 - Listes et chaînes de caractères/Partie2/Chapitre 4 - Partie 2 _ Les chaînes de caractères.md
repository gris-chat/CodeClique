# Chapitre 4 - Partie 2 : Les chaînes de caractères

## INTRODUCTION
Vous savez déjà qu'une chaîne de caractères (string) sert à stocker du texte. Mais saviez-vous qu'en Python, une chaîne est presque une liste de caractères ? C'est une séquence ordonnée de lettres.

## I/ Accès aux caractères
Comme pour les listes, on peut accéder à chaque lettre avec son **indice**.

**Exemple :**
```python
mot = "Python"
print(mot[0]) # Affiche "P"
print(mot[1]) # Affiche "y"
print(mot[5]) # Affiche "n"
```

## II/ Connaitre la longueur
La fonction `len()` (pour "length") marche aussi bien sur les listes que sur les chaînes. Elle donne le nombre d'éléments.

**Exemple :**
```python
mot = "Bonjour"
print(len(mot)) # Affiche 7
```

## III/ Parcourir une chaîne
On peut utiliser une boucle `for` pour lire chaque lettre une par une.

**Exemple :**
```python
mot = "Salut"
for lettre in mot:
    print(lettre)
```
Ce code affichera :
S
a
l
u
t

## IV/ ⚠️ Une grande différence avec les listes
Les chaînes sont **immuables** (non modifiables). On ne peut pas changer une lettre directement.

**Exemple :**
```python
texte = "Salut"
# texte[0] = "B" -> CELA PROVOQUE UNE ERREUR !
```

Si on veut changer le texte, il faut créer une nouvelle chaîne :
```python
texte = "Balut" # On écrase l'ancienne variable avec une nouvelle chaîne
```

## V/ Quelques outils utiles (méthodes)
*   `.upper()` : transforme tout en MAJUSCULES.
*   `.lower()` : transforme tout en minuscules.
*   `.replace("a", "b")` : remplace les "a" par des "b".

**Exemple :**
```python
cri = "Attention"
print(cri.upper()) # Affiche "ATTENTION"
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une variable `ville = "Paris"`. Affiche la première lettre et la dernière lettre (indice 4).

2) Affiche le mot "python" en majuscules.
