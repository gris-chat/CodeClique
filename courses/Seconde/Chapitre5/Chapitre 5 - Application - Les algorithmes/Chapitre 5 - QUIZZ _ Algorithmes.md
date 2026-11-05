# Chapitre 5 - QUIZZ : Algorithmes

### ⭐ 1. Que fait l'algorithme de recherche séquentielle ?
a) Il trie la liste.
b) Il parcourt la liste du début à la fin pour trouver un élément.
c) Il supprime les éléments en double.
d) Il divise la liste en deux à chaque étape.

**Correction :**
réponse b)
"Séquentielle" veut dire qu'il suit la séquence, élément par élément, dans l'ordre.

### ⭐ 2. Dans le pire des cas, combien d'étapes faut-il pour chercher un élément dans une liste de 100 éléments (recherche séquentielle) ?
a) 1 étape (on a de la chance)
b) 50 étapes (la moitié)
c) 100 étapes (si l'élément est à la toute fin)
d) 1000 étapes

**Correction :**
réponse c) 100 étapes
Si l'élément est le tout dernier (ou s'il n'est pas là), il faut tout regarder !

### ⭐⭐ 3. Quel est le principe du Tri par sélection ?
a) On échange les voisins s'ils sont dans le mauvais ordre.
b) On coupe la liste en deux morceaux et on les recolle.
c) On cherche le plus petit élément et on le met au début, puis on recommence.

**Correction :**
réponse c)
On "sélectionne" le minimum, d'où le nom.

### ⭐⭐ 4. Si je veux filtrer une liste pour garder les nombres pairs, quelle condition dois-je utiliser dans mon `if` ?
a) `if nombre / 2 == 0:`
b) `if nombre % 2 == 0:`
c) `if nombre * 2 == 0:`
d) `if nombre = 2:`

**Correction :**
réponse b) `if nombre % 2 == 0:`
L'opérateur `%` (modulo) donne le reste de la division. Si le reste de la division par 2 est 0, c'est que le nombre est pair.
