# Chapitre 4 - Partie 3 : Les dictionnaires

## INTRODUCTION
Les listes sont pratiques quand on veut ranger des choses dans l'ordre (0, 1, 2...). Mais parfois, on veut retrouver une information par son **nom**, pas par sa place.
Imaginez un répertoire téléphonique : vous ne cherchez pas le "5ème numéro", vous cherchez le numéro de "Alice". C'est exactement ce que font les dictionnaires !

## I/ Le principe Clé : Valeur
Un dictionnaire fonctionne par paires **Clé : Valeur**.
*   La **Clé** permet de retrouver l'information (ex: "Nom").
*   La **Valeur** est l'information elle-même (ex: "Dupont").

Pour créer un dictionnaire, on utilise des accolades `{}`.

**Exemple :**
```python
eleve = {
    "nom": "Dupont",
    "prenom": "Jean",
    "age": 16,
    "moyenne": 14.5
}
```

## II/ Accéder à une valeur
On utilise la clé entre crochets (comme pour l'indice d'une liste).

**Exemple :**
```python
print(eleve["nom"]) # Affiche "Dupont"
print(eleve["age"]) # Affiche 16
```

## III/ Ajouter ou modifier une valeur
C'est très simple : on affecte une valeur à une clé.
*   Si la clé existe déjà, la valeur est remplacée.
*   Si la clé n'existe pas, elle est ajoutée.

**Exemple :**
```python
mon_dico = {"pomme": 2, "banane": 3}

# Modifier
mon_dico["pomme"] = 5 
print(mon_dico) # {"pomme": 5, "banane": 3}

# Ajouter
mon_dico["poire"] = 10
print(mon_dico) # {"pomme": 5, "banane": 3, "poire": 10}
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée un dictionnaire `voiture` avec les clés "marque" (ex: "Renault"), "modele" (ex: "Clio") et "annee" (ex: 2010).

2) Affiche la phrase : "Je vends une [marque] [modele] de [annee]." en utilisant les valeurs du dictionnaire.
