                                                                                                                                                                                                                                                                                                                                        
# Chapitre 2 - Partie 1 : les conditions

## INTRODUCTION
Jusqu'à présent, nos programmes étaient linéaires : ils exécutaient les instructions les unes après les autres, toujours de la même façon. Mais dans la vie, on fait des choix ! "S'il pleut, je prends un parapluie, sinon je mets des lunettes de soleil". En Python, c'est pareil : on utilise des "conditions" pour dire à l'ordinateur d'exécuter certaines lignes de code seulement si une condition est remplie.

## I/ L'instruction "if" (si) 
C'est la base de la condition. On teste si quelque chose est Vrai (True).

**Syntaxe :** 
```python
if condition : 
    # Instruction à exécuter si c'est vrai
```

**⚠️ Attention !**   
Ne pas oublier les deux points ":" à la fin de la ligne du if.  
L'indentation (le décalage vers la droite) est obligatoire ! C'est elle qui dit à Python : "cette ligne fait partie du bloc conditionnel".

**Exemple :** 
```python
age = 18 
if age >= 18: 
    print("Vous êtes majeur !")
```

## II/ L'instruction "else" (sinon) 
C'est l'alternative. Si la condition du if est fausse, alors on exécute ce qu'il y a dans le else.

**Syntaxe :** 
```python
if condition : 
    # Fait ça si c'est vrai 
else : 
    # Fait ça si c'est faux
```

**Exemple :** 
```python
note = 8 
if note >= 10: 
    print("Bravo, tu as la moyenne !") 
else: 
    print("Il faut encore réviser un peu.")
```

## III/ L'instruction "elif" (sinon si) 
Parfois, le monde n'est pas tout blanc ou tout noir, il y a plusieurs cas possibles. elif (contraction de "else if") permet de tester une nouvelle condition si la première est fausse.

**Exemple :**
```python
temperature = 20

if temperature > 30: 
    print("Il fait très chaud !") 
elif temperature > 15: 
    print("Il fait bon.") 
else: 
    print("Il fait froid, mets un manteau !")
```

## EXERCICES D'APPLICATION DIRECTE :

1) Crée une variable mot_de_passe. Si le mot de passe est "PythonIsCool", affiche "Accès autorisé", sinon affiche "Accès refusé".

2) Crée une variable x. Affiche si le nombre est positif, négatif ou nul (indice : utilise elif).

