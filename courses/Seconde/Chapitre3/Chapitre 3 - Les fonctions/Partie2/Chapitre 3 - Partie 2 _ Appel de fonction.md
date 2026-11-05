# Chapitre 3 - Partie 2 : Appel de fonction

## INTRODUCTION
Si vous écrivez une recette de cuisine sur un bout de papier mais que vous ne la cuisinez jamais, vous n'aurez jamais rien à manger ! Pour une fonction, c'est pareil. La définir (avec `def`) ne suffit pas, il faut ensuite l'utiliser : on dit qu'on **appelle** la fonction.

## I/ L'appel simple
C'est très facile : on écrit le nom de la fonction suivi de parenthèses.

**Syntaxe :** 
```python
nom_de_la_fonction()
```

**Exemple :**
On reprend notre fonction de la partie 1.
```python
def dire_bonjour():
    print("Bonjour !")

# Ici, on appelle la fonction
dire_bonjour() 
# L'ordinateur va sauter à la ligne "def dire_bonjour", 
# exécuter le print, puis revenir ici.
```

## II/ Les paramètres (ou arguments)
Parfois, une fonction a besoin d'informations pour travailler. Imaginez un grille-pain : si vous ne mettez pas de pain dedans, il ne sert à rien. Le pain, c'est le **paramètre**.

**Syntaxe :**
On met le nom de la variable entre les parenthèses lors de la définition.

```python
def souhaiter_anniversaire(prenom):
    print("Joyeux anniversaire " + prenom + " !")
```

Et quand on appelle la fonction, on lui donne la **valeur** qu'on veut :

```python
souhaiter_anniversaire("Alice")
# Affiche : Joyeux anniversaire Alice !

souhaiter_anniversaire("Bob")
# Affiche : Joyeux anniversaire Bob !
```

On peut même mettre plusieurs paramètres en les séparant par des virgules :
```python
def additionner(a, b):
    print(a + b)

additionner(5, 10) # Affiche 15
```

## EXERCICES D'APPLICATION DIRECTE :

1) Appelle la fonction `se_presenter` que tu as créée dans la partie 1.

2) Crée une fonction `saluer(nom)` qui prend un nom en paramètre et affiche "Salut [nom], ça va ?". Teste-la avec "Thomas" et "Julie".
