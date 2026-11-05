# Chapitre 5 - Exercices : Les algorithmes

### ⭐ ESG411 - Exercice 1 : **Qui est là ?**
On dispose de la liste des élèves présents : `presents = ["Tom", "Léa", "Kim", "Paul"]`.
Crée une fonction `verifier_presence(nom)` qui renvoie "Présent" si le nom est dans la liste, et "Absent" sinon.
Utilise-la pour vérifier si "Kim" et "Hugo" sont là.

**Correction**
```python
presents = ["Tom", "Léa", "Kim", "Paul"]

def verifier_presence(nom):
    for eleve in presents:
        if eleve == nom:
            return "Présent"
    return "Absent"

print("Kim est :", verifier_presence("Kim"))
print("Hugo est :", verifier_presence("Hugo"))
```

### ⭐ ESG412 - Exercice 2 : **Le filtre à admis**
Voici les notes d'un groupe : `notes = [8, 12, 15, 6, 10, 19, 4]`.
Crée un programme qui construit une nouvelle liste `admis` contenant uniquement les notes supérieures ou égales à 10.
Affiche la liste des admis et leur nombre (avec `len()`).

**Correction**
```python
notes = [8, 12, 15, 6, 10, 19, 4]
admis = []

for note in notes:
    if note >= 10:
        admis.append(note)

print("Notes retenues :", admis)
print("Nombre d'admis :", len(admis))
```

### ⭐⭐ ESG421 - Exercice 3 : **Maximum manuel**
Sans utiliser la fonction `max()`, écris un algorithme qui trouve le plus grand nombre dans la liste `[15, 4, 32, 8, 10]`.
*Indice : Crée une variable `max_actuel` initialisée avec le premier élément, puis parcours la liste pour voir si tu trouves plus grand.*

**Correction :**
```python
liste = [15, 4, 32, 8, 10]
max_actuel = liste[0]

for nombre in liste:
    if nombre > max_actuel:
        max_actuel = nombre

print("Le maximum est :", max_actuel)
```

### ⭐⭐ ESG422 - Exercice 4 : **Commerçant malin**
Un commerçant a une liste de ventes de la journée : `ventes = [15, 50, 10, 100, 5, 20]`.
1. Il veut savoir combien de ventes dépassent 20€. (Filtre + Compteur ou len)
2. Il veut savoir s'il a fait une vente exacte de 100€. (Recherche)

**Correction**
```python
ventes = [15, 50, 10, 100, 5, 20]

# 1. Ventes > 20
grosses_ventes = []
for v in ventes:
    if v > 20:
        grosses_ventes.append(v)
print("Nombre de ventes > 20€ :", len(grosses_ventes))

# 2. Vente de 100€
trouve = False
for v in ventes:
    if v == 100:
        trouve = True
        break
        
if trouve:
    print("Oui, il a fait une vente de 100€ !")
else:
    print("Non, pas de vente de 100€.")
```

### ⭐⭐⭐ ESG401 - Exercice 5 : **Tri de prénoms**
Voici une liste de prénoms : `["Zoe", "Arthur", "Leo", "Bea"]`.
Adapte l'algorithme du **tri par sélection** (vu dans le cours) pour trier cette liste par ordre alphabétique.
*Note : En Python, on peut comparer des chaînes avec < ("Arthur" < "Bea" est True).*

**Correction**
```python
prenoms = ["Zoe", "Arthur", "Leo", "Bea"]
n = len(prenoms)

for i in range(n):
    min_index = i
    for j in range(i+1, n):
        if prenoms[j] < prenoms[min_index]: # Comparaison alphabétique
            min_index = j
            
    if min_index != i:
        # Echange
        prenoms[i], prenoms[min_index] = prenoms[min_index], prenoms[i]

print(prenoms) # ['Arthur', 'Bea', 'Leo', 'Zoe']
```
