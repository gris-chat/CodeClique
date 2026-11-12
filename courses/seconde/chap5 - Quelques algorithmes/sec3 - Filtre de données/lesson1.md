# Chapitre 5 - Partie 3 : Filtre de données
Nous vivons dans un monde de données. Savoir extraire les informations importantes est crucial. "Filtrer" une liste signifie créer une nouvelle liste qui ne contient QUE les éléments qui respectent une certaine règle ou un critère. Par exemple, dans une liste de prix  : ```[150, 20, 300, 5, 50]```, si je souhaite garder seulement les prix inférieurs à 100€ alors la liste filtrée devient : ```[20, 5, 50]```.
## I/ Le Filtre
*Idée générale* : On prend un panier vide. On regarde chaque objet un par un. Si l'objet nous intéresse, on le met dans le panier. Sinon, on le laisse.

**Méthode générale** :

Créer une liste vide ```resultat = []```.
Parcourir la liste de départ avec une boucle *for*.
Sil'élément respecte la condition, alors on l'ajoute avec la fonction *.append()*.
On renvoie la liste *resultat*.

:::outline{outlineType="EXEMPLE"}

Exemple:
```python
def filtrer_pairs(liste_nombres):
    nombres_pairs = []		    	    # 1. On crée la liste vide qui contiendra la liste filtrée
    for nombre in liste_nombres :       # 2. On parcourt la liste
        if nombre % 2 == 0 :		    # 3. Le critère : est-ce que le reste de la division par 2 vaut 0 ?
                                        # Si oui, on garde !
            nombres_pairs.append(nombre)
    return nombres_pairs 	            # 4. On donne le résultat


#Test
mes_nombres = [1, 2, 3, 4, 5, 6, 7, 8]
print(filtrer_pairs(mes_nombres))       # Affiche [2, 4, 6, 8]
```

:::
## II/ Application concrète
Imaginez un site d’achat en ligne pour achetez un ordinateur mais vous avez un budget limité à 500€ alors vous cochez la case "Prix < 500€". Le site utilise un algorithme de filtre !
```python
liste_produits = [
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
choix = filtrer_petits_prix(liste_produits, 500)
print(choix)    # Affiche [{'nom': 'Ordi Bureau', 'prix': 450}, {'nom': 'Tablette', 'prix': 300}]
```
## EXERCICES D'APPLICATION DIRECTE :
**Exercice 1** : 
Créer une fonction *garder_positifs(liste)* qui ne garde que les nombres strictement supérieurs à 0. Teste avec ```[-5, 10, 0, 3, -2]```.

**Exercice 2** : 
1. Créer une liste de mots `["chat", "chien", "oiseau", "lion"]`. 
2. Créer une fonction qui filtre pour ne garder que les mots qui ont moins de 5 lettres.

