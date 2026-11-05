### ⭐⭐ EPM331 - Exercice 1 : **Calcul de seuil d’une suite définie par récurrence**

*Notions : calcul de seuil, suite*  

On considère la suite $(u_n)$ définie comme suit :  
$u_0 = 5$ et $u_{n+1} = 8u_n + 2$.

1. On souhaite tout d’abord savoir à partir de quel rang la suite dépasse 100. Écrire une fonction *seuil()* qui calcule ce rang.  

2. À présent, modifier cette fonction pour calculer le rang à partir duquel la suite dépasse 200.  

3. Afin d’éviter de modifier à nouveau la fonction et de pouvoir déterminer le seuil pour n’importe quelle valeur donnée $S$, écrire une fonction *seuil_n(S)* qui, pour une valeur donnée de $S$, calcule le plus petit rang $n$ vérifiant la condition $u_n > S$.
