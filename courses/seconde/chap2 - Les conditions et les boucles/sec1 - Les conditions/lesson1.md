# Chapitre 2 - Partie 1 : les conditions

## Vidéo : Logique propositionnelle

::video{link="https://www.youtube-nocookie.com/embed/yMVhaR5e6-g?rel=0&modestbranding=1&iv_load_policy=3"}

Jusqu'à présent, nos programmes étaient linéaires : ils exécutaient les instructions les unes après les autres. Mais dans la vie, on fait des choix et certaines instructions ne doivent être exécutées que dans certaines conditions ! Par exemple, "s'il pleut, je prends un parapluie, sinon je mets des lunettes de soleil". En Python, c'est pareil : on utilise des **conditions** pour dire à l'ordinateur d'exécuter certaines lignes de code seulement si une condition est remplie.
## I/ L'instruction "if" - Si
L’instruction *if* permet de tester si une condition est vraie ou non. Dans le cas où la condition est vraie, les instructions se trouvant dans la bloc *if*, c’est-à-dire les instructions qui se trouvent dans le bloc conditionnel, sont exécutées. Dans le cas où la condition est fausse, alors le bloc conditionnel est ignoré et le programme ne l’exécute pas. Le programme passe alors à la suite. 

:::outline{outlineType="RETENIR"}
**Syntaxe** : \
if *condition* : \
    *# Instruction à exécuter si c'est vrai*
:::

:::outline{outlineType="INFORMATION"}
C’est quoi une indentation ? \
Pour délimiter les instructions du bloc if et les suivantes, on utilise en Python l’indentation qui est un décalage vers la droite. Ainsi les instructions d’un même bloc, c’est-à-dire qui suivent une même condition, sont alignées. 
:::

:::outline{outlineType="EXEMPLE"}
```python
jour="lundi"
if jour == "lundi" : 
	jour_demain= "mardi"
	print("Nous sommes lundi")
print("Je préfère les samedis")
```
Dans cet exemple, le message *"Nous sommes lundi"* est affiché ainsi que le message *"Je préfère les samedis"*.

```python
jour="mardi"
if jour == "lundi" : 
	jour_demain= "mardi"
	print("Nous sommes lundi")
print("Je préfère les samedis")
```
A présent, le message *"Nous sommes lundi"* **n’est pas** affiché alors que le message *"Je préfère les samedis"*, lui, **est affiché** !
:::

:::outline{outlineType="ATTENTION"}
Ne pas oublier les deux points ":" après la condition du if.
L'indentation est obligatoire ! C'est elle qui dit à Python : "cette ligne fait partie du bloc conditionnel".
:::

:::outline{outlineType="EXEMPLE"}
```python
age = 18 
if age >= 18: 
    print("Vous êtes majeur !")
```
Dans cet exemple, si la variable `age` a une valeur supérieure ou égale à 18 alors le message *"Vous êtes majeur !"* est affiché, sinon l’instruction est ignorée et rien n’est affiché.
:::

## II/ L'instruction "else" - Sinon
L’instruction *else* représente l'**alternative**, c’est le sinon. Si la condition du *if* est fausse, alors on exécute ce qu'il y a dans le *else*. Mais si la condition du *if* est vraie alors le bloc du *if* est exécuté mais pas les instructions du *else*. 

:::outline{outlineType="RETENIR"}
**Syntaxe** : \
if **condition : ** \
>    #Instructions if \

else : \
>    #Instructions else \
:::
:::outline{outlineType="ATTENTION"}
Ne pas oublier les deux points `:` après le else .
L'indentation est toujours obligatoire !
:::

:::outline{outlineType="EXEMPLE"}
```python
note = 8 
if note >= 10: 
    print("Bravo, tu as la moyenne !") 
else: 
    print("Il faut encore réviser un peu.")
```

Dans cet exemple, la condition est `note>=10`. Or *note=8* donc la condition n’est pas vérifiée, ainsi l’instruction de la bloc *if* est ignorée mais pas celle du bloc *else*. Le message *"Il faut encore réviser un peu"* est donc affiché. 
:::

## III/ L'instruction "elif" - Sinon Si
Parfois, il y a plusieurs cas possibles. L’instruction *elif*, qui est une contraction de *else if* permet de tester une nouvelle condition si la première est fausse. Il peut y avoir autant de *elif* que l’on souhaite, il faut cependant toujours commencer par un bloc *if*, puis des bloc *elif* et enfin si besoin un bloc *else*. 

:::outline{outlineType="RETENIR"}
**Syntaxe** : \
```python
if condition1 : 
    # Instructions du bloc if

elif condition2 : 
    # Instructions du bloc elif1

elif condition 3 : 
    # Instructions du bloc elif3

…
else : 
    # Instructions du bloc else
```

:::
:::outline{outlineType="ATTENTION"}
Ne pas oublier les deux points ":" après la condition du *elif*.
L'indentation est encore (et toujours) obligatoire !
:::

:::outline{outlineType="EXEMPLE"}
```python
temperature = 20
if temperature > 30: 
    print("Il fait très chaud !") 

elif temperature > 15: 
    print("Il fait bon.") 

else: 
    print("Il fait froid, mets un manteau !")
```

Dans cet exemple, *temperature* est égale à 20. La première condition, `temperature > 30 ` n’est pas vérifiée. Ainsi l’instruction de la bloc *if* est ignorée. Puis la condition du *elif* est vérifiée. Alors le message *"Il fait bon"* est affiché et la suite est ignorée jusqu’à sortir des choix, c’est-à-dire que le programme reprend après le bloc du *else* qui est ignoré. 
:::

## EXERCICES D'APPLICATION DIRECTE :
1. Créez une variable *mot_de_passe*. Si le mot de passe est *"PythonIsCool"*, affichez *"Accès autorisé"*, sinon affichez *"Accès refusé"*.
```python
```

2. Créez une variable *x*. Affichez si le nombre est positif, négatif ou nul 
*indice* : utilise *elif*
```python
```
```python
print(x)
```

:::outline{outlineType="ERREUR"}
* Oublier les indentations ! 
* Oublier les deux points après les conditions de if et elif !
* Oublier de mettre les conditions à if et elif ou mettre une condition à else !
:::



