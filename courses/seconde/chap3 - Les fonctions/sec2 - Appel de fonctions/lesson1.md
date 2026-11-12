# Chapitre 3 - Partie 2 : Appel de fonction
Si vous écrivez une recette de cuisine sur un bout de papier mais que vous ne la cuisinez jamais, vous n'aurez jamais rien à manger ! Pour une fonction, c'est pareil. La définir ne suffit pas, il faut ensuite l'utiliser : on dit qu'on **appelle** la fonction.
## I/ L'appel simple
Pour faire appel à une fonction, il suffit d’écrire le nom de la fonction suivi de parenthèses.

:::outline{outlineType="RETENIR"}
**Syntaxe** :
*nom_de_la_fonction*()
:::

:::outline{outlineType="EXEMPLE"}
On reprend notre fonction de la partie 1.
```python
def dire_bonjour():
    print("Bonjour !")

# Ici, on appelle la fonction
dire_bonjour() 

# L'ordinateur va sauter à la ligne "def dire_bonjour", 
# exécuter le print, puis revenir ici.
```
:::
## II/ Les paramètres ou arguments
Parfois, une fonction a besoin d'informations. Imaginez une machine à café : si vous ne choisissez pas quelle boisson vous voulez, la machine ne peut pas s’actionner et alors elle n’a pas d’utilité. Ainsi, la boisson est le **paramètre** ou l’**argument**. 

:::outline{outlineType="RETENIR"}
**Syntaxe** : On met le nom de la variable entre les parenthèses lors de la définition.
```python
def fonction(arguments)
	#action de la fonction
	#return
```
:::

:::outline{outlineType="EXEMPLE"}
```python
def souhaiter_anniversaire(prenom):
    print("Joyeux anniversaire " + prenom + " !")
```

Et quand on appelle la fonction, on lui donne la **valeur** que l’on veut:

```python
souhaiter_anniversaire("Alice")	# Affiche : Joyeux anniversaire Alice !

souhaiter_anniversaire("Bob")	# Affiche : Joyeux anniversaire Bob !
```

On peut même mettre plusieurs paramètres en les séparant par des virgules :
```python
def additionner(a, b):
    print(a + b)

additionner(5, 10) # Affiche 15
```
:::
## EXERCICES D'APPLICATION DIRECTE :
1. Appelle la fonction *se_presenter()* que tu as créée dans la partie 1.
```python
```
2. Créer une fonction *saluer(nom)* qui prend un nom en paramètre et affiche *"Salut [nom], ça va ?"*. Teste-la avec *"Thomas"* et *"Julie"*.
```python
```

