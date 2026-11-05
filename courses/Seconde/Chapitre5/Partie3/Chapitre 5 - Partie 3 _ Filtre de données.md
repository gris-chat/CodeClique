# Chapitre 5 - Partie 3 : Filtre de données

## INTRODUCTION
Nous vivons dans un monde de données (Big Data). Savoir extraire les informations importantes est crucial.
"Filtrer" une liste signifie créer une nouvelle liste qui ne contient QUE les éléments qui respectent une certaine règle (un critère).
Exemple : Dans une liste de prix `[150, 20, 300, 5, 50]`, je veux garder seulement les prix inférieurs à 100€ -> `[20, 5, 50]`.

## I/ Algorithme - Le Filtre
**Idée générale :**
On prend un panier vide. On regarde chaque objet un par un. Si l'objet nous intéresse, on le met dans le panier. Sinon, on le laisse.

**Méthode générale :**
1.  Créer une liste vide `resultat = []`.
2.  Parcourir la liste de départ avec une boucle `for`.
3.  `if` l'élément respecte la condition, on l'ajoute avec `.append()`.
4.  On renvoie la liste `resultat`.

**Exemple commenté :**
```python
def filtrer_pairs(liste_nombres):
    # 1. On crée la liste vide qui recevra les élus
    nombres_pairs = []
    
    # 2. On parcourt tout le monde
    for nombre in liste_nombres:
        # 3. Le critère : est-ce que le reste de la division par 2 vaut 0 ?
        if nombre % 2 == 0:
            nombres_pairs.append(nombre) # Si oui, on garde !
            
    # 4. On donne le résultat
    return nombres_pairs

mes_nombres = [1, 2, 3, 4, 5, 6, 7, 8]
print(filtrer_pairs(mes_nombres)) # Affiche [2, 4, 6, 8]
```

## II/ Application concrète
Imaginez un site e-commerce. Vous cherchez un ordinateur. Vous cochez la case "Prix < 500€". Le site utilise un algorithme de filtre !

```python
produits = [
    {"nom": "Ordi Gamer", "prix": 1200},
    {"nom": "Ordi Bureau", "prix": 450},
    {"nom": "Tablette", "prix": 300},
    {"nom": "Smartphone", "prix": 800}
]

def filtrer_petits_prix(liste_produits, budget_max):
    resultat = []
    for produit in liste_produits:
        if produit["prix"] < budget_max:
            resultat.append(produit)
    return resultat

# Je cherche un produit à moins de 500€
choix = filtrer_petits_prix(produits, 500)
print(choix) 
# Affiche [{'nom': 'Ordi Bureau', 'prix': 450}, {'nom': 'Tablette', 'prix': 300}]
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une fonction `garder_positifs(liste)` qui ne garde que les nombres strictement supérieurs à 0. Teste avec `[-5, 10, 0, 3, -2]`.

2) Crée une liste de mots `["chat", "chien", "oiseau", "lion"]`. Crée une fonction qui filtre pour ne garder que les mots qui ont moins de 5 lettres.
