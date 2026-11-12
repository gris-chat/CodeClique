# Chapitre 4 - Partie 1 : Les listes
Nous avons étudié précédemment le fonctionnement d’une variable, qui permet de stocker une valeur. Par exemple pour stocker la note d’un élève au contrôle, on peut utiliser la variable *note* et écrire : ‘note = 15’. 
**Mais comment faire si on veut retenir les notes de tous les élèves de la classe ?** 
Créer 30 variables (*note1*, *note2*,...*note30*) serait long et difficile à gérer. Pour éviter cela, Python propose un outil particulier : les **listes**.
## I/ Définition d’une liste
Dans le premier chapitre, nous avons vu qu’une variable est comme une boîte. Il faut imaginer qu’une liste est l’étagère sur laquelle on pose ces boîtes. 

Pour s’assurer de retrouver la boîte plus tard, on note son emplacement. Pour noter cet emplacement, on part de la gauche et attention, on commence par zéro ! Ainsi, si on considère une liste, le premier élément en partant de la gauche se trouve au rang 0, le deuxième élément au rang 1 et ainsi de suite !
## II/ Créer une liste
Gardons à l’esprit qu’une liste est une étagère. Comme pour une variable, il faut que nous lui donnions un nom pour la retrouver plus tard, appelons-la par exemple *etagere*. Imaginons que nous ayons mis 4 boîtes sur cette étagère (une contenant 1, une contenant 4, une contenant 2 et une contenant 12). Il faut maintenant que nous notions où nous avons mis chaque boîte. 

Revenons maintenant au Python. Pour lister les éléments, on utilise *[]*. Il faut imaginer que chaque crochet correspond à une paroi de l’étagère.

En python, cela correspondra à : 
```python
etagere = [1, 4, 2, 12]
```
De plus, de la même manière qu’on peut poser un livre, une boîte et une plante sur une même étagère, on peut mettre tout type de variable dans une liste. Les listes peuvent contenir tous les types de variables qu’on a vu précédemment comme des entiers, des flottants, des chaînes de caractère, des booléens…etc.  

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
# Une liste d'entiers
notes = [12, 18, 5, 14]

# Une liste de chaînes
prenoms = ["Alice", "Bob", "Charlie"]

# Une liste mixte
vrac = [12, "Bonjour", True, -5.5]

# Une liste vide
vide = []
```
:::

### EXERCICES : 
**Exercice 1** : 

Définir la liste correspondante

**Exercice 2** : Définir une liste s’appelant etagere et contenant 4 boites (boite1, boite2, boite3, boite4)

**Exercice 3** : Définir une liste contenant un entier, un booléen et une chaîne de caractère

**Exercice 4** : Pierre-Jacques doit aller faire ses courses (il doit aller acheter du lait, du pain et des œufs). Écrire sa liste de courses.

:::outline{outlineType="AIDE"}
*Indice* : Écrire des chaînes de caractères
:::
## III/ Accéder aux éléments
Comme on l’a vu dans la partie I, les éléments d’une liste sont numérotés pour qu’on puisse les retrouver. C’est ce qu’on appelle son **indice**. 
:::outline{outlineType="ATTENTION"}
ATTENTION : Par convention, en informatique, on commence toujours à compter à partir de 0 !
:::

Pour accéder à un élément, on se place dans la liste puis on se place à l’indice voulu.

:::outline{outlineType="EXEMPLE"}
Exemple :
Prenons la liste suivante : 
`fruits = ["Pomme", "Banane", "Fraise"]`

Pour accéder à l’élément 0 de la liste on écrit : 
`fruits[0]`

Ainsi, si on fait : `print(fruit[0])`   , le programme affiche `“Pomme”`

Imaginons maintenant que nous souhaitions utiliser un des éléments de la liste pour l’utiliser ailleurs. On veut cependant conserver une trace de cet élément dans la liste. Ainsi, on fait une copie de l’objet dans une nouvelle variable.
:::

:::outline{outlineType="EXEMPLE"}
Exemple
Nous possédons la liste suivante :  
`etagere = [“Harry Potter”, “Percy Jackson”, “Le seigneur des anneaux”]`

On veut récupérer le Percy Jackson sur l’étagère. On a donc : 
`livre = etagere[1] //Attention à la numérotation des éléments`
:::

:::outline{outlineType="QUESTION"}
**Quizz** : 
Qu’affiche print(fruits[1]) ?

On a la liste suivante : `chiffres = [15, 7, 19, 3, 4 ]`
Récupérer dans une variable *nombre* le nombre à la position 2 dans la liste. ATTENTION le premier élément est numéroté à 0.
:::

### EXERCICE : 
Créer la liste contenant les élément 3, 5, 1 et afficher tous ses éléments à l’aide d’une boucle *for*.

## III/ Modifier une liste
De la même manière que l’on peut enlever, ajouter des boîtes ou modifier leur contenu sur les étagères, les éléments d’une liste peuvent être modifiés.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
notes = [10, 15, 8]     #On définit la liste
print(notes)            # Affiche toute la liste
                        # On change la première note
notes[0] = 12           #On choisit la boîte numérotée 0 (avec [0]) puis on change son contenu
print(notes)            # Affiche [12, 15, 8]
```
:::

:::outline{outlineType="QUESTION"}
**Quizz** :
Prenons la liste que l’on a vu plus haut :  `etagere = [“Harry Potter”, “Percy Jackson”, “Le seigneur des anneaux”]` qui représente une étagère de bibliothèque

On veut remplacer *“Harry Potter”* par *“La quête d’Ewilan”*. Ecrivez la ligne de code correspondante.
:::
## IV/ Ajouter un élément
Pour ajouter un élément à la fin de la liste, on utilise la fonction *.append()* qui est fournie directement par Python.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
amis = ["Pierre", "Paul"]
amis.append("Jacques")
print(amis) # Affiche ["Pierre", "Paul", "Jacques"]
```
:::
:::outline{outlineType="QUESTION"}
Quizz : 
Reprenons la liste : `etagere = [“Harry Potter”, “Percy Jackson”, “Le seigneur des anneaux”]`
On aimerait ajouter à la bibliothèque *“Arsène Lupin”*. Ecrivez la ligne de code correspondante à l’aide de *.append()*.
:::
## EXERCICES D'APPLICATION DIRECTE :
1. Crée une liste nommée *semaine* contenant les jours du *"Lundi"* au *"Vendredi"*. Affiche le deuxième jour.

2. Crée une liste vide *panier*. Ajoute *"Pomme"* puis *"Orange"* avec  la fonction *.append()*. Affiche le panier.

