# QUIZZ

# NIVEAU DE DIFFICULTÉ : 

⭐ Question de cours  
⭐⭐ Confirmé  
⭐⭐⭐ Pour aller plus loin

# Calcul des termes d’une suite

1. ⭐ On considère la fonction suivante :  
   	def Un(n) : 	

   	un\_1=	1		  
   	for i in range(n):		  
   		un \= 3\*un\_1  
   		un\_1 \= un		  
   	return un	

Que renvoie l’appel Un(5) ?

1) 1  
2) 3  
3) 15  
4) 243

Correction : réponse *d) 243*  
		

2. ⭐⭐ On considère la fonction suivante : 
```python
def Un(n) : 	
	un_1=	1		  
	for i in range(n):		  
		un = 3*un_1  
		unG_1 = un		  
	return un	
```

A calcul de quel terme de la suite (Un) définie par la relation de récurrence Un= 3\*U(n-1) et U1 \= 1 correspond l’appel Un(5) ?

1) U4  
2) U5  
3) U6  
4) U7

Correction : réponse *c) U6*

# Somme des termes d’une suite

# Calcul de seuil d’une suite

1. ⭐ Que signifie *calculer le seuil d’une suite* ?  
1) Calculer tous les termes de la suite  
2) Trouver la valeur maximale de la suite  
3) Trouver le plus petit rang à partir duquel une condition est vérifiée  
4) Trouver la formule explicite de la suite

Correction : réponse *c) Trouver le plus petit rang à partir duquel une condition est vérifiée*

2. ⭐ Dans la phrase : “Déterminer à partir de quel rang Un\>=100”, à quoi correspond le seuil ?  
1) A la valeur 100  
2) A la valeur de Un  
3) Au dernier rang de la suite  
4) Au plus petit rang n tel que Un\>=100

Correction : réponse *d) Au plus petit rang n tel que Un\>=100*

3. ⭐⭐ Pourquoi utilise-t-on une boucle while pour calculer un seuil ?   
1) Parce que la boucle for est interdite  
2) Parce que le nombre d’itérations est inconnu à l’avance  
3) Parce que la suite est toujours définie par récurrence  
4) Parce que la boucle while est plus rapide

Correction : réponse *b) Parce que le nombre d’itérations est inconnu à l’avance*

4. ⭐ Pour chercher le seuil, quelles variables doivent obligatoirement être initialisées ?   
1) Uniquement le terme  
2) Uniquement le rang  
3) Le rang et le terme  
4) Aucune des deux

 Correction : réponse *c) Le rang et le terme*  
Le calcul d’un seuil, c’est trouver un rang. Il faut donc au départ initialisé le rang mais également le terme car c’est une condition sur le terme qui permet de déterminer le rang correspondant au seuil. 

5. ⭐⭐ Quelle condition doit-on mettre dans la boucle while pour chercher le seuil où Un \>= 50 ?  
1) Un \>= 50  
2) Un \== 50  
3) Un \< 50  
4) n \< 50

Correction : réponse *c) Un \< 50*  
La condition du while est TANT QUE la condition est vraie, la boucle tourne. Donc, puisque nous voulons que tant que Un n’est pas supérieur ou égale à 50, c’est-à dire que tant que Un est strictement inférieur à 50 alors la boucle doit continuer de tourner. 

6. ⭐⭐ Pourquoi doit-on incrémenter n dans la boucle while du calcul de seuil suivant ?

   Un \= 3

   n \= 0

   while Un \< 1000 : 

   Un \= 3\*Un \+ 1

   n \= n \+ 1 

   print(n)

1) Pour éviter une erreur Python  
2) Pour que le rang corresponde au terme calculé  
3) Pour arrêter la boucle   
4) Ce n’est pas nécessaire

Correction : réponse *b) Pour que le rang corresponde au terme calculé*   
En effet, la condition du while ne dépend pas de la variable n donc incrémenter cette variable ne change rien pour arrêter la boucle et de permet pas d’éviter une erreur Python. Cependant, le calcul d’un seuil renvoie le rang minimum à partir duquel un terme vérifie une condition donc à chaque fois qu’un terme est calculé, le rang doit correspondre.

