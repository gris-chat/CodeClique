# courses

Afin de permettre au programme Python "fill_database.py" dans le backend de remplir la base de données, les cours doivent être enregistrés et rangés avec une structure stricte que j'explique ici. 

### Arborescence des cours 
Voici la structure que doit avoir le dossier `courses` :
```text
courses/
├── seconde/  # Pour la seconde, il n'y a pas de matière, tout est maths.
│   ├── chap1/
│   ├── chap2/
│   └── chap3/
├── premiere/
│   ├── maths/
│   │   ├── chap1/
│   │   ├── chap2/
│   │   └── chap3/
│   │       ├── chap.json
│   │       ├── sec1/
│   │       │   ├── sec.json
│   │       │   ├── lesson1.json
│   │       │   ├── lesson1.md
│   │       │   ├── lesson2.json
│   │       │   ├── lesson2.md
│   │       │   └── quiz3.json # C'est un quiz donc il n'y a pas de quiz3.md
│   │       ├── sec2/
│   │       ├── sec3/
│   │       ├── sec4/
│   │       └── quiz5.json # un quiz de fin de chapitre
│   ├── nsi/
│   │   ├── chap1/
│   │   └── chap2/
│   └── physique/
└── terminale/
```

### Chapitres
Pour créer un chapitre numéro X, il suffit de créer un dossier nommé "chapX" ou 
"chapX [Ce que vous voulez]" dans le dossier seconde/ ou premiere/maths/, 
terminale/physique/, ...

Pour vous y retrouver, vous pouvez mettre ce que vous voulez après "chap1 ".
L'important est que le nom de dossier contienne "chapX" (X peut être strictement
supérieur à 9) puis rien ou un espace. 
Je recommande d'utiliser la convention suivante : "chapX - [Nom du chapitre]".


Chaque dossier "chapX ..." doit impérativement contenir un fichier json 
"chap.json" qui doit être rempli comme suit :

```json
{
    "title": "Acquis de seconde",
    "description": "", 
    "difficulty": 1
}
```

Ne mettez pas "Chapitre X : " dans title. Par exemple au lieu de mettre
"Chapitre 1 : Acquis de seconde", mettez "Acquis de seconde". Le programme 
devinera le numéro du chapitre à l'aide du dossier parent (ex : "chap1" ou 
"chap1 - Acquis de seconde") et le frontend l'affichera automatiquement dans le 
titre. 

Le champ "difficulty" doit être rempli par le chiffre 1, 2 ou 3 qui 
correspondent respectivement à "Facile", "Moyen" et "Difficile".

Un chapitre peut contenir une ou plusieurs sections et des quiz/exercices.


### Sections (= Parties d'un chapitre)
Pour créer une section il suffit de créer un dossier "secX" ou "secX [Ce que 
vous voulez]". Je recommande d'utiliser la convention suivante :
"secX - [Nom de la section]".

Pour créer un quiz/exercice il suffit de créer un fichier json "quizX.json" ou
"exX.json" et "exX.md" où X est le numéro qui indiquera où sera placé votre 
quiz/exercice. 
Par exemple, si vous voulez créer six sections et mettre un quiz au milieu 
du chapitre et un quiz à la fin du chapitre, nommez vos fichiers et dossiers 
comme suit : 
"sec1 sec2 sec3 quiz4.json sec5 sec6 sec7 quiz8.json"
J'explique dans 'Leçons, exercices et quiz' comment remplir les fichiers
"quizX.json", "exX.json" et "exX.md"

Chaque dossier "secX ..." doit impérativement contenir un fichier json 
"sec.json" qui doit être rempli comme suit :

```json 
{
    "title": "",
    "description": "",
    "difficulty": 1
}
```

Dans "title", ne notez pas "Section X : Ma super section", notez directement
"Ma super section".

Chaque section contient des leçons, des exercices et des quiz.


### Leçons, exercices et quiz
Pour créer une leçon, il suffit de créer deux fichiers lessonX.json et lessonX.md.
Le fichier lessonX.json doit être rempli comme suit :
```json 
{
  "title": "Calcul de seuil d'une suite",
  "difficulty": 3
}
```
Le fichier lessonX.md doit contenir le markdown de la leçon.


Pour une leçon, dans "title" ne notez pas "Cours : Calcul de seuil". Notez 
directement "Calcul de seuil". Le frontend se chargera d'afficher 
"Cours : " quand il s'agit d'une leçon. 

Pour créer un exercice, il suffit aussi de créer trois fichiers exX.json,
exX.md et exX.py. Le fichier exX.json doit être rempli comme suit : 
```json 
{
  "title": "Calcul d'un seuil de la suite de Fibonacci.",
  "difficulty": 3
}
```
Le fichier exX.md doit contenir le markdown de l'exercice.
Le fichier exX.py doit contenir le programme python de correction de l'exercice.


Pour créer un quiz, il suffit de créer un fichier quizX.json rempli comme 
suit :
```json 
{
  "title": "Conditions et Boucles",
  "difficulty": 2, 
  "content": [
        {
            "answers": [
                false,
                true,
                false,
                false
            ],
            "options": [
                "```if x = 10 then:```",
                "```if x == 10:```",
                "```if x == 10```",
                "```if (x = 10) {"
            ],
            "question": "Quelle est la syntaxe correcte pour une condition si x vaut 10 ?",
            "difficulty": 1,
            "explanation": "réponse b) ```if x == 10:``` \nEn Python, l'égalité se teste avec `==` (double égal) et la ligne doit se terminer par `:` (deux points).",
            "instruction": "Choisissez une seule réponse.",
            "multiple_answers": false
        },
        {
            "answers": [
                false,
                false,
                true,
                false
            ],
            "options": [
                "1 2 3",
                "0 1 2 3",
                "0 1 2",
                "1 2"
            ],
            "question": "Qu'affiche le code suivant ? \n```python \nfor i in range(3): \n\tprint(i) \n```",
            "difficulty": 1,
            "explanation": "réponse c) 0 1 2 \nLa fonction ```range(3)``` commence à 0 inclus et s'arrête à 3 exclu.",
            "instruction": "Choisissez une seule réponse.",
            "multiple_answers": false
        }
    ]
}
```


### Exemple
En guise d'exemple, j'ai commencé à remplir le dossier 
`courses/seconde/chap2 - Les boucles` à partir de ce qu'a fait le pôle formation.

### Remarque : 
Il est possible d'ajouter des fichiers qui ne sont pas d'extensions .md, .json et .py et de créer de nouveaux dossiers qui ne commencent pas par "chap", "sec", "premiere", "maths", ... dans les répertoires. Ces fichiers/dossiers ne seront pas lus par le script Python. Cependant cela est déconseillé puisque cela encombrera l'arborescence. Par exemple, certains aiment écrire et sauvegarder en .docx, mais il est plutôt conseillé d'écrire directement en markdown (.md) pour éviter toutes les erreurs de conversion. 