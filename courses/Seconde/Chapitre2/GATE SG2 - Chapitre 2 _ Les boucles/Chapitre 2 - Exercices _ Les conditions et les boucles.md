Chapitre 2 \- Exercices : Les conditions et les boucles.md 2026-01-13 

Chapitre 2 \- Exercices : Les conditions et les boucles 

⭐ ESG211 \- Exercice 1 : Le videur de boîte 

Crée une variable age. Si l'âge est supérieur ou égal à 18, affiche "Bienvenue \!". Sinon, affiche "Désolé, c'est réservé aux majeurs.". 

Correction 

age \= 17 \# On peut changer cette valeur pour tester 

if age \>= 18: 

 print("Bienvenue, amusez-vous bien \!") 

else: 

 print("Désolé, l'établissement est réservé aux majeurs.") 

⭐ ESG212 \- Exercice 2 : Bulletin scolaire 

Crée une variable moyenne. 

Si la moyenne est \>= 16 : affiche "Très bien". 

Sinon si elle est \>= 14 : affiche "Bien". 

Sinon si elle est \>= 12 : affiche "Assez bien". 

Sinon si elle est \>= 10 : affiche "Passable". 

Sinon : affiche "Rattrapage". 

Correction 

moyenne \= 13.5 

if moyenne \>= 16: 

 print("Très bien") 

elif moyenne \>= 14: 

 print("Bien") 

elif moyenne \>= 12: 

 print("Assez bien") 

elif moyenne \>= 10: 

 print("Passable") 

else: 

 print("Rattrapage") 

⭐ ⭐ ESG221 \- Exercice 3 : La punition 

Bart Simpson doit écrire 10 fois au tableau "Je ne copierai pas le code de mon voisin". Écris un programme qui utilise une boucle for pour afficher cette phrase 10 fois, en numérotant les lignes (1. Je ne copierai pas..., 2\. Je ne copierai pas...).

1 / 3   
Chapitre 2 \- Exercices : Les conditions et les boucles.md 2026-01-13 

Correction : 

for i in range(1, 11): 

 print(i, "Je ne copierai pas le code de mon voisin") 

⭐ ⭐ ESG222 \- Exercice 4 : \*\*Le juste prix \*\* 

Définis une variable prix\_secret \= 42. Crée un programme qui demande à l'utilisateur de deviner le prix (tu peux simuler l'entrée utilisateur par une variable que tu changes manuellement pour tester). Tant que l'utilisateur ne trouve pas le bon prix : 

Si le nombre est trop grand, affiche "C'est moins \!". 

Si le nombre est trop petit, affiche "C'est plus \!". Quand il a trouvé, affiche "Gagné \!". Correction 

prix\_secret \= 42 

proposition \= 0 \# On crée la variable avant la boucle pour pouvoir la tester 

while proposition \!= prix\_secret: 

 \# On demande un nombre et on n'oublie pas de le transformer en entier (int) 

 proposition \= int(input("Devinez le prix : ")) 


 if proposition \> prix\_secret: 

 print("C'est moins \!") 

 elif proposition \< prix\_secret: 

 print("C'est plus \!") 

\# On ne sort de la boucle que si proposition \== prix\_secret 

print("Gagné \!") 

⭐ ⭐ ⭐ ESG201 \- Exercice 5 : Le mot de passe sécurisé 

On veut forcer l'utilisateur à saisir un mot de passe qui contient au moins 5 caractères. Demande un mot de passe (simulé par variable). 

Tant que la longueur du mot de passe (utilise len(mot\_de\_passe)) est inférieure à 5, affiche "Trop court \!" et redemande le mot de passe. 

Une fois la boucle terminée, affiche "Mot de passe enregistré". 

Correction

2 / 3   
Chapitre 2 \- Exercices : Les conditions et les boucles.md 2026-01-13 

mdp \= input("Choisissez un mot de passe : ") 

\# len(mdp) donne le nombre de caractères dans la chaîne while len(mdp) \< 5: 

 print("Erreur : Votre mot de passe est trop court (minimum 5 caractères) \!") 

 mdp \= input("Veuillez choisir un mot de passe plus long : ") print("Mot de passe enregistré avec succès \!")

3 / 3 