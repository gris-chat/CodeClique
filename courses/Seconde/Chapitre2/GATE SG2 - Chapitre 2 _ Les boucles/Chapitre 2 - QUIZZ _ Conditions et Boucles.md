# Chapitre 2 - QUIZZ : Conditions et Boucles

### ⭐ 1. Quelle est la syntaxe correcte pour une condition si x vaut 10 ?
a) ```if x = 10 then:```   
b) ```if x == 10:```  
c) ```if x == 10```  
d) ```if (x = 10) {```  

**Correction :**
réponse b) ```if x == 10:```
En Python, l'égalité se teste avec `==` (double égal) et la ligne doit se terminer par `:` (deux points).

### ⭐ 2. Qu'affiche le code suivant ?
```python
for i in range(3):
    print(i)
```
a) 1 2 3   
b) 0 1 2 3    
c) 0 1 2  
d) 1 2  

**Correction :**
réponse c) 0 1 2  
La fonction ```range(3)``` commence à 0 inclus et s'arrête à 3 exclu.

### ⭐⭐ 3. Que se passe-t-il si j'exécute ce code ?

```Python
x = 10
while x > 0:
    print(x)
    x = x + 1
```
a) Il affiche les nombres de 10 à 1.  
b) Il affiche 10 une seule fois.  
c) C'est une boucle infinie.  
d) Il y a une erreur de syntaxe. 

**Correction :**
réponse c) 
C'est une boucle infinie. La condition est x > 0. Comme on part de 10 et qu'on AJOUTE 1 à chaque fois (11, 12, 13...), x sera toujours supérieur à 0. La boucle ne s'arrêtera jamais.

### ⭐⭐ 4. Qu'affiche ce code ?

```Python
a = 5
b = 10
if a > 5:
    print("A")
elif b == 10:
    print("B")
else:
    print("C")
```
a) A  
b) B  
c) C  
d) A et B

**Correction :**
réponse b) B 
La première condition a > 5 est FAUSSE (car 5 n'est pas strictement supérieur à 5). On passe au elif. La condition b == 10 est VRAIE. Donc on affiche "B" et on sort de la structure conditionnelle.