# Chapitre 4 - Partie 3 : Les dictionnaires
Les listes sont pratiques quand on veut ranger des choses dans l'ordre, mais parfois, on veut retrouver une information d'une autre manière que par son emplacement. Imaginez un répertoire téléphonique : vous ne cherchez pas le *"5ème numéro"*, vous cherchez le numéro de *"Alice"*. C'est exactement ce que font les dictionnaires !
## I/ Le principe Clé : Valeur
Un dictionnaire fonctionne par paires **Clé : Valeur**.

* La **Clé** permet de retrouver l'information.
* La **Valeur** est l'information elle-même.

Pour créer un dictionnaire, on utilise des accolades *{}*.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
eleve = {
    "nom": "Dupont",
    "prenom": "Jean",
    "age": 16,
    "moyenne": 14.5
}
```
:::
## II/ Accéder à une valeur
Pour accéder à une valeur on utilise la clé entre crochets de la même manière d’un indice pour une liste.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
print(eleve["nom"]) # Affiche "Dupont"
print(eleve["age"]) # Affiche 16
```
:::
## III/ Ajouter ou modifier une valeur
Pour ajouter une valeur, on affecte simplement une valeur à une clé. Puis s’il on souhaite modifier cette valeur, il suffit de réaffecter la valeur modifiée à la clé. 

* Si la clé existe déjà, la valeur est remplacée.
* Si la clé n'existe pas, elle est ajoutée.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
mon_dico = {"pomme": 2, "banane": 3}

# Modifier
mon_dico["pomme"] = 5 

print(mon_dico) # {"pomme": 5, "banane": 3}

# Ajouter
mon_dico["poire"] = 10

print(mon_dico) # {"pomme": 5, "banane": 3, "poire": 10}
```
:::
## EXERCICES D'APPLICATION DIRECTE :
1. Crée un dictionnaire *voiture* avec les clés "marque" , "modele" et "annee" et avec des valeurs associées. 

2. Affiche la phrase : *"Je vends une [marque] [modele] de [annee]."* en utilisant les valeurs du dictionnaire.

