# Chapitre 4 - QUIZZ : Listes et Chaînes

### ⭐ 1. Si `liste = [10, 20, 30]`, que vaut `liste[1]` ?
a) 10
b) 20
c) 30
d) Erreur

**Correction :**
réponse b) 20
En informatique, on commence à compter à 0 !
indice 0 -> 10
indice 1 -> 20

### ⭐ 2. Comment ajouter "Chat" à la fin de la liste `animaux` ?
a) `animaux.add("Chat")`
b) `animaux.plus("Chat")`
c) `animaux.append("Chat")`
d) `animaux = "Chat"`

**Correction :**
réponse c) `animaux.append("Chat")`
"Append" signifie "ajouter à la fin" en anglais.

### ⭐⭐ 3. Peut-on modifier le troisième caractère de `mot = "Python"` en faisant `mot[2] = "X"` ?
a) Oui, `mot` devient "PyXhon".
b) Non, cela crée une erreur car les chaînes sont immuables.
c) Oui, mais seulement si le mot est en majuscules.

**Correction :**
réponse b) Non
Les chaînes de caractères (strings) sont immuables en Python. Si on veut changer une lettre, il faut recréer toute la chaîne.

### ⭐⭐ 4. Dans le dictionnaire `score = {"J1": 10, "J2": 5}`, comment récupérer le score de J1 ?
a) `score[0]`
b) `score["J1"]`
c) `score(10)`
d) `score.get(0)`

**Correction :**
réponse b) `score["J1"]`
Dans un dictionnaire, on n'utilise pas d'indice chiffre (0, 1...) mais la CLÉ (ici "J1").
