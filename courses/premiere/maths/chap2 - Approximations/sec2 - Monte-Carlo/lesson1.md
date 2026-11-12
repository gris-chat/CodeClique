# PM2 - Chapitre 2 - Partie 2 : Approximation - Monte-Carlo


## Définition
<p style="text-align:justify;">
La méthode Monte-Carlo a pour but d'approcher une valeur numérique en utilisant l'aléatoire.
Comment cela fonctionne-t-il ?
<p style="text-align:justify;">
Prenons un dé à 6 faces équilibré. Nous sentons qu'il y a autant de chances de tirer l'une ou l'autre des faces. Cependant, en faisant peu de tirage, cette loi n'est pas respectée. Mais si nous en faisons plein, nous nous en rapprochons.
<p style="text-align:justify;">
La méthode de Monte-Carlo utilise cette même idée. En faisant plein de tirages aléatoires dans un intervalle de valeur, on pourra considérer que la réponse qui revient le plus de fois en moyenne est la bonne.


## Calcul de l'espérance
### Définition
<p style="text-align:justify;">
L'espérance est le résultat moyen de l'expérience aléatoire. Plus une valeur a de chances d'apparaître et plus elle aura de poids dans le calcul de l'espérance.

:::outline{outlineType="EXEMPLE"}
#### Exemple
<p style="text-align:justify;">
Dans une urne, il y a deux boules numérotées 1 et une boule numérotée 2. Il y a donc $(\frac{2}{3})$ de chance de tirer un 1 et $\frac{1}{3}$ de chance de tirer un 2.
<p style="text-align:justify;">
L'espérance de cette expérience est donc :
$\mathbb{E} = 1 \times \frac{2}{3} + 2 \times \frac{1}{3}$ = \frac{4}{3}$
:::


### Méthode de Monte-Carlo
<p style="text-align:justify;">
On remarque que l'espérance a une définition proche de la moyenne. En effet, l'espérance est en réalité la moyenne d'un très grand nombre de tirage.
<p style="text-align:justify;">
On peut ainsi utiliser la méthode de Monte-Carlo pour estimer l'espérance. Pour cela, On effectue de nombreux tirages aléatoires avant d'en faire la moyenne. Cette dernière correspond à l'espérance.

