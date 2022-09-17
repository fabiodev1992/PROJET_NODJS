const express = require('express')
//importation du packet morgan qui permet de démarer le serveur à chaque momen t où on veux faire les testes
const morgan = require('morgan')
//importation de la dependance favicone qui est un midlewer pour instaler le favicone
const favicon = require('serve-favicon')
//inportation du midle ware body parser qui permet de convertire une chaîne de caractère
const bodyParser = require('body-parser')
//chemain vers le composent(fichier) sequelize.js
const sequelize = require('./src/db/sequelize')

///**********////
//on cré une méthode avec le nom de l'iinstance(serveur web sur le qu'elle va fonctionner l'API REST)
const app = express() 
//definition d'une constantr avec le port 3000 sur le qu'l'appli va tourner
const port = 8000 
//liste des midleswer
app
//ici on appel le favicone
.use(favicon(__dirname + '/favicon.ico'))
//utilisation du middlware avec le la dépendance morgan
.use(morgan('dev'))
//utilisation du midlwer Bodyparser
.use(bodyParser.json())
sequelize.initDb()
//ici, nous placerons nos futurs points de terminaison(les routes API)
//on demare l'API pour aficher les infos de notre apliction
//la route pour rccupérer tous les éléments de la table 
require('./src/routes/findAllPokemons')(app)
//la route pour recupérer un  élément de la table
require('./src/routes/findPokemonByPk')(app)
//ajouter un pokemon
require('./src/routes/createPokemon')(app)
//modification d'un élément
require('./src/routes/updatePokemon')(app)
//Suppretion d'un pokemon
require('./src/routes/deletePokemon')(app)

app.listen(port, () => console.log(`Notre application est démaré sur: http://localhost:${port}`))
