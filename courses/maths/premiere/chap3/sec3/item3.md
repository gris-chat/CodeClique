### ⭐⭐ EPM332 - Exercice 2 : **Trop de lapins !!!**

*Notions : calcul de seuil, fonction, suites*  

Dans une réserve naturelle, on introduit une population de lapins. On estime que chaque année :

- 80 % des lapins survivent ;
- 120 nouveaux lapins sont introduits.

On modélise la population par la suite $(u_n)$ définie par :  
$u_0 = 200$ et $u_{n+1} = 0,8u_n + 120$,  
où $u_n$ représente le nombre de lapins après $n$ années.

1. Calculer $u_1$ puis $u_2$.  
2. Quelle semble être la monotonie de la suite ?  

On admet alors que la population se stabilise vers une valeur $L$ qui est égale à 600.

Le gestionnaire de la réserve souhaite savoir à partir de combien d’années la population dépasse 550 lapins. On cherche alors le plus petit entier $n$ tel que : $u_n > 550$.

3. Écrire un programme Python qui détermine ce rang.  
4. Exécuter le programme et interpréter le résultat.  
5. Modifier la fonction pour qu’elle puisse calculer le seuil pour n’importe quelle valeur donnée $S$. (On souhaite une fonction *seuil_population(S)* qui renvoie le plus petit rang $n$ tel que $u_n > S$.)
