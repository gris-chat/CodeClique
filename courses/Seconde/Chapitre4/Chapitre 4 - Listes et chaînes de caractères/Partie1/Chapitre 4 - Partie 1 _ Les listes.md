# Chapitre 4 - Partie 1 : Les listes

## INTRODUCTION
Nous avons vu comment stocker UNE valeur dans une variable (`age = 15`). Mais comment faire si on veut stocker les notes de toute la classe ? Créer 30 variables (`note1`, `note2`, ...`note30`) serait long et difficile à gérer.
Heureusement, Python propose les **listes**. C'est comme une étagère où on peut ranger plusieurs objets dans un ordre précis.

## I/ Créer une liste
Pour créer une liste, on utilise des crochets `[]` et on sépare les éléments par des virgules.
Une liste peut contenir n'importe quoi : des entiers, des chaînes, des booléens, et même d'autres listes !

**Exemple :**
```python
# Une liste d'entiers
notes = [12, 18, 5, 14]

# Une liste de chaînes
prenoms = ["Alice", "Bob", "Charlie"]

# Une liste mixte
vrac = [12, "Bonjour", True, -5.5]

# Une liste vide
vide = []
```

## II/ Accéder aux éléments
Chaque élément de la liste a une position unique, appelée **indice** (ou index).
⚠️ **ATTENTION :** En informatique, on commence toujours à compter à partir de **0** !

*   Le premier élément est à l'indice 0.
*   Le deuxième élément est à l'indice 1.
*   ...

Pour accéder à un élément, on écrit le nom de la liste suivi de l'indice entre crochets.

**Exemple :**
```python
fruits = ["Pomme", "Banane", "Fraise"]

print(fruits[0]) # Affiche "Pomme"
print(fruits[1]) # Affiche "Banane"
print(fruits[2]) # Affiche "Fraise"
```

## III/ Modifier une liste
Contrairement à d'autres structures, on peut changer le contenu d'une liste après sa création.

**Exemple :**
```python
notes = [10, 15, 8]
print(notes) # Affiche [10, 15, 8]

# On change la première note
notes[0] = 12
print(notes) # Affiche [12, 15, 8]
```

## IV/ Ajouter un élément
Pour ajouter un élément à la fin de la liste, on utilise la méthode `.append()`.

**Exemple :**
```python
amis = ["Pierre", "Paul"]
amis.append("Jacques")
print(amis) # Affiche ["Pierre", "Paul", "Jacques"]
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une liste nommée `semaine` contenant les jours du "Lundi" au "Vendredi". Affiche le deuxième jour (indice 1).

2) Crée une liste vide `panier`. Ajoute "Pomme" puis "Orange" avec `.append()`. Affiche le panier.
