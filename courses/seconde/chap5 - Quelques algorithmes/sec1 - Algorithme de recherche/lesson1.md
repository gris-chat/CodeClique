# Chapitre 5 - Partie 1 : Algorithme de recherche

## Vidéo : Recherche dichotomique

::video{link="https://www.youtube-nocookie.com/embed/J2yzBJ7B26c?rel=0&modestbranding=1&iv_load_policy=3"}

Imaginez que vous cherchez une carte précise dans un jeu de cartes mélangé. Comment faites-vous ? Vous regardez la première, puis la deuxième, puis la troisième... jusqu'à trouver la bonne. En informatique, c'est **l'algorithme de recherche séquentielle** ou **parcours séquentiel**.

## I/ Cas 1 : Présence d'un élément
*Idée générale* : Nous voulons savoir si une valeur existe dans une liste. On parcourt toute la liste et si on trouve la valeur, on s'arrête et on dit "Trouvé !" mais si on arrive à la fin de la liste sans avoir rien trouvé, alors on renvoie “Pas trouvé !”.

**Méthode générale** :
Créer une variable booléenne ```trouve = False```.
Parcourir la liste avec une boucle ```for```.
On teste si l'élément actuel est celui qu'on cherche avec f et si c’est le cas, alors ```trouve = True```
Enfin, on renvoie la valeur de la variable *trouve*.

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
def est_present(liste, valeur_cherchee):
	found = False				#Etape 1
	for element in liste:				#Etape 2
		if element == valeur_cherchee:		#Etape 3
			found = True				#Etape 4
			break # On arrête car on a trouvé
	return found

mes_nombres = [10, 5, 8, 20]
print(est_present(mes_nombres, 8)) 		# Affiche True
print(est_present(mes_nombres, 12)) 	# Affiche False
```
:::
## II/ Cas 2 : Recherche de la position (indice)
Parfois, on ne veut pas juste savoir si l’élément est présent dans la liste mais on veut savoir OU il se trouve !

**Méthode générale** : Au lieu d’utiliser un booléen comme *trouve*, on renvoie le rang représenté par la variable i dans la boucle. 

:::outline{outlineType="EXEMPLE"}
Exemple :
```python
def trouver_indice(liste, valeur_cherchee):
	for i in range(len(liste)):			# On parcourt les indices de la listes
		if liste[i] == valeur_cherchee:	# Si l’élément en position  correspond
			return i 				    # On renvoie la position immédiatement
	return -1 					        # Convention : si on ne trouve pas, on renvoie -1

classement = ["Alice", "Bob", "Charlie"]
print(trouver_indice(classement, "Bob")) 	# Affiche 1
```
:::
## EXERCICES D'APPLICATION DIRECTE :


### Exercice 1 : 
Crée une fonction *contient_zero(liste)* qui renvoie True si la liste contient le nombre 0 et False sinon.
```python

```


### Exercice 2
1. Crée une liste de mois. 


```python

```


2. Cherche l'indice du mois "Juin".
```python
```