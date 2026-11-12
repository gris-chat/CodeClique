# Chapitre 1 - Partie 3 : les opérations

Il est intéressant d'avoir des variables mais encore plus de pouvoir faire des opérations avec ! Pour plus de clarté et de simplicité, nous allons énumérer les opérations en fonction des types ! 

## I/ Les opérations
### Int - entier :
L'addition +, la multiplication *, la soustraction -, la division / sont les principaux. Il y a également `**` pour la puissance. On peut également utiliser la division euclidienne avec `//` le quotient et `%` le reste. 
:::outline{outlineType="EXEMPLE"}
opération -->> python
1+2 -->> `1+2`
1x2 -->> `1*2`
2-1 -->> `2-1`
2÷1 -->> `2/1`
2puissance3 -->> `2**3`
:::

### Float - flottant : 
Les opérations sont les mêmes que les entiers. 

### String - chaîne de caractères :
Pour concaténer des chaînes de caractères, c'est-à-dire accoler deux chaînes ensemble - par exemple concaténer "bon" et "jour" donne "bonjour" - , on peut utiliser `+`.
On peut aussi “multiplier” une chaîne de caractères par un entier pour indiquer que l’on veut la répéter plusieurs fois. Par exemple, `3 * “bonjour ”` donnera `“bonjour bonjour bonjour “`


## II/ Les tests
Il est intéressant de faire des opérations avec des variables mais ce qui est encore plus cool est de les comparer ! Ainsi on peut faire des tests entre variables. Un test, s'il est vrai renvoie True et s'il est faux, renvoie False. Les tests renvoient donc un booléen. Pour cela, il existe différents opérateurs.

### Int et Float :
Comme en mathématiques, on peut utiliser `>`,`<`, mais aussi `<=` et `>=` qui sont respectivement “inférieur ou égal” et “supérieur ou égal”. Pour tester l'égalité entre deux nombres, on écrit `==` . Attention, il y a bien **DEUX** `=` car un seul signifie l'affectation, ce qui n'est pas l'opération voulue ! La différence a pour opérateur `!=`. Le test `x != y`  se traduit par x différent de y.

### String : 
Pour tester l'égalité de chaîne de caractères, on peut utiliser == ( attention, il y a toujours DEUX = ) et pour tester la différence != .

De même pour les autres types, l'égalité des variables se teste par l'opérateur == (attention, il y a toujours DEUX *=* )  et la différence par != . 

## III/ Les types des tests 
On verra plus tard pourquoi les tests sont très intéressants mais pour le moment, on peut revenir au type Bool, qui je le rappelle sont les valeurs *True* et *False* qui signifie Vrai et Faux. En effet, on peut directement affecter un test à une variable et cette variable est alors de type booléen ! Le test, dans sa définition, renvoie si il est vrai ou faux, ainsi le test renvoie *True* ou *False* qui sont des booléens, donc un test est de type booléen.
:::outline{outlineType="EXEMPLE"}
On écrit `x=(4>2)`. Puisque 4 est bien strictement supérieur à 2, alors le test `4>2` est vrai donc ce test renvoie True. La variable x est alors égale à True et si on appelle x, True est renvoyé.
:::

Le mot `not` permet d’inverser la valeur du test, c’est-à-dire qu’un `not` devant un test permet de renvoyer *True* si test renvoie *False* et renvoie *False* si le test renvoie *True*.

