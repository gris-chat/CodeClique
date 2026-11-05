*Notions : calcul de seuil, lecture de fonction*  

On considère la suite numérique $(u_n)$ définie par son premier terme $u_0 = 2$ et pour tout entier naturel $n$, par :  
$u_{n+1} = \dfrac{2u_n + 1}{u_n + 2}$.  

On admet que la suite $(u_n)$ est bien définie. 


```python
def algo(p):   
    u = 2   
    n = 0   
    while u - 1 > p:   
        u = (2*u + 1) / (u + 2)   
        n = n + 1   
    return (n, u)
```

1. On considère que la suite est décroissante.   
   Interpréter les valeurs $n$ et $u$ renvoyées par l’appel de la fonction `algo(p)` dans le contexte de l’exercice.   

2. Donner, sans justifier, la valeur de $n$ pour $p = 0,001$.  

