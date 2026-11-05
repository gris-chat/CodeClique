# Chapitre 4 - Exercices : Listes et Chaînes

### ⭐ ESG411 - Exercice 1 : **La liste de courses**
Crée une liste `courses` contenant "Pain", "Lait", "Beurre".
1. Affiche le premier élément.
2. Ajoute "Chocolat" à la fin de la liste.
3. Remplace "Lait" par "Lait de soja" (indice 1).
4. Affiche la liste finale.

**Correction**
```python
courses = ["Pain", "Lait", "Beurre"]
print(courses[0])

courses.append("Chocolat")
courses[1] = "Lait de soja"

print(courses)
# Résultat : ['Pain', 'Lait de soja', 'Beurre', 'Chocolat']
```

### ⭐ ESG412 - Exercice 2 : **Moyenne de classe**
Voici une liste de notes : `notes = [12, 15, 8, 19, 10, 14]`.
Calcule la moyenne de ces notes.
*Astuce : Tu peux utiliser la fonction sum(liste) pour la somme et len(liste) pour le nombre d'éléments.*

**Correction**
```python
notes = [12, 15, 8, 19, 10, 14]
somme = sum(notes)
nb_notes = len(notes)
moyenne = somme / nb_notes

print("La moyenne est :", moyenne)
```

### ⭐⭐ ESG421 - Exercice 3 : **Compteur de voyelles**
Crée une fonction `compter_voyelles(mot)` qui prend un mot en paramètre et renvoie le nombre de voyelles (a, e, i, o, u, y) qu'il contient.
*Indice : Parcours le mot lettre par lettre avec une boucle for et vérifie si la lettre est dans "aeiouy".*

**Correction :**
```python
def compter_voyelles(mot):
    compteur = 0
    voyelles = "aeiouy"
    for lettre in mot:
        if lettre in voyelles:
            compteur = compteur + 1
    return compteur

print(compter_voyelles("banane")) # Affiche 3 (a, a, e)
```

### ⭐⭐ ESG422 - Exercice 4 : **Le dictionnaire de notes**
On a un dictionnaire représentant les notes d'un élève par matière :
`bulletin = {"Maths": 15, "Français": 12, "Anglais": 14}`
1. Affiche la note de Maths.
2. Ajoute une note de "Sport" égale à 18.
3. Calcule la moyenne de l'élève (somme des valeurs / nombre de matières).
*Astuce : bulletin.values() donne la liste des notes.*

**Correction**
```python
bulletin = {"Maths": 15, "Français": 12, "Anglais": 14}

# 1. Note de Maths
print("Maths :", bulletin["Maths"])

# 2. Ajout Sport
bulletin["Sport"] = 18

# 3. Moyenne
somme = sum(bulletin.values())
nb_matieres = len(bulletin)
moyenne = somme / nb_matieres

print("Moyenne générale :", moyenne)
```

### ⭐⭐⭐ ESG401 - Exercice 5 : **Le Palindrome**
Un palindrome est un mot qui se lit pareil dans les deux sens (ex: "KAYAK", "RADAR").
Crée une fonction `est_palindrome(mot)` qui renvoie `True` si le mot est un palindrome, et `False` sinon.
*Astuce Python : mot[::-1] permet d'inverser un mot.*

**Correction**
```python
def est_palindrome(mot):
    # On met tout en majuscules pour éviter les soucis (Kayak != kayak)
    mot = mot.upper()
    inverse = mot[::-1]
    
    if mot == inverse:
        return True
    else:
        return False

print(est_palindrome("Kayak")) # True
print(est_palindrome("Python")) # False
```
