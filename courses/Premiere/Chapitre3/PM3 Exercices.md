# Exercices

## Calcul d’un seuil

### ⭐⭐ EPM331 \- Exercice 1 : **Calcul de seuil d’une suite définie par récurrence**

*Notions : calcul de seuil, fonction*  
On considère la suite définie comme suit : Un \= 5 et Un+1 \= 8Un\+2.

1. On souhaite tout d’abord savoir à partir de quel rang la suite dépasse 100\. Écrire une fonction *seuil()* qui calcule ce rang.  
2. A présent, modifier cette fonction pour calculer le rang à partir duquel la suite dépasse 200\.   
3. Afin d’éviter de modifier à nouveau la fonction et de pouvoir déterminer le seuil pour n’importe quelle valeur de n, écrire une fonction *seuil\_n(n)* qui, pour une valeur donnée de nnn, calcule le seuil vérifiant la condition Un\>n

### ⭐⭐ EPM332 \- Exercice 2 : **Trop de lapins \!\!\!**

*Notions : calcul de seuil, fonction, suites*  
Dans une réserve naturelle, on introduit une population de lapins. On estime que chaque année :

* 80 % des lapins survivent,

* 120 nouveaux lapins sont introduits.

On modélise la population par la suite (Un) définie par : U0 \= 200 et  Un+1\= 0,8Un\+120 où Un​ représente le nombre de lapins après n années.

1. Calculer U1 puis U2.  
2. Quelle semble être la monotonie de la fonction ? 

On admet alors que la population de stabilise vers une valeur L qui est égale à 600\. 

Le gestionnaire de la réserve souhaite savoir à partir de combien d’années la population dépasse 550 lapins. On cherche alors le plus petit entier n tel que : Un\>500.

3. Écrire un programme Python qui détermine ce rang.  
4. Exécuter le programme et interpréter le résultat.   
5. Modifier la fonction pour qu’elle puisse calculer le seuil pour n’importe quelle valeur donnée S. (On souhaite une fonction *seuil\_population(S)* qui renvoie le plus petit rang n tel que Un\>S.

### ⭐⭐ ⭐ EPM333 \- Exercice 3 : **Lecture d’une fonction** \- d’après le Bac Amérique du nord 2025 sujet 1

*Notions : calcul de seuil, lecture de fonction*  
On considère la suite numérique (u) définie par son premier terme u0\= 2 et pour tout entier naturel n, par : Un+1 \= (2\*Un\+1)/(Un\+2).  
On admet que la suite (u,) est bien définie. 

```python
def algo(p):   
   u=2   
   n=0   
   while u-1\>p:   
      u=(2\*u+1)/(u+2)   
      n=n+1   
   return (n,u)
```

1. On considère que la suite est décroissante.   
   Interpréter les valeurs n et u renvoyées par l’appel de la fonction algo(p) dans le contexte de l’exercice.   
2.  Donner, sans justifier, la valeur de n pour p \= 0,001.

