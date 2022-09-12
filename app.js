//console.log('salut je suis un node');
const express = require('express')
//importation du packet morgan
const morgan = require('morgan')
//importation de la dependance favicone
const favicon = require('serve-favicon')
//inportation du midle ware body parser
const bodyParser = require('body-parser')
//on importe le  composent helper avec require
//const helper = require('./helper.js')//pour aléger le code 
//onn va importer la méthode succes au lieux de helper
//ajoue de la nouvelle méthode **getUniqueId**
const {success, getUniqueId} = require('./helper.js')
 //on reccupert express avec require qui indique à node d'aller chercher la depandanc express ds node moule
 let pokemons = require('./mock-pokemon') //spéifier un chemain ver le composant mock-pokemon
const app = express() //on cré une méthode avec le nom de l'iinstance(serveur web sur le qu'elle va fonctionner l'API REST)
const port = 5000 //definition d'une constantr avec le port 3000 sur le qu'l'appli va tourner
//misa en place d'un middlwere
//const logger = (req, res, next) => {
	//console.log(`URL : ${req.url}`)
	//next()
//}première forme de mise en place de middlwere
//next est le point dentré d'un middlwere 
//app.use(logger)
//app.use((req, res, next) => {
	//console.log(`URL : ${req.url}`)
	//next()// deuième forme de mise en place de middlwere
//})
//pour utluliser plusieur middlwar de express js
app
.use(favicon(__dirname + '/favicon.ico'))//ici on appel le favicone
.use(morgan('dev'))//utilisation du middlware avec le la dépendance morgan
.use(bodyParser.json())//utilisation du midlwer Bodyparser

app.get('/', (req,res) => res.send(`salut je suis new de express et j'apprend node avec des scriptes j'ais hate de la suite`))//le point d'entré de notre aplication
//get est la methode qui prend le chemain de la terminèson
// la fonction avec des arguments req(qui reccupère un objet riques qui reccupère un objet en entré)
//res(qui correspond à l'objet à renvoyer au client)
//methode send de l'objet respons pour envoyer le resulta
//**************************************************
//ajoutont une nouvell route les unpoint(les  points dentré)
//point de terminaisonExpress = app.METHOD(CHEMAIN, GESTIONAIRE(res,res)) 
//est un exemple de route avec expressjs
//ajouter une nouvelle route avec une url
app.get('/api/pokemons/:id', (req, res) => {
	//extraction de l'id
	const id = parseInt(req.params.id) //avec la méthode parseInt on converti une chaîne de caractère en INT
	const pokemon = pokemons.find(pokemon => pokemon.id === id)
	//on reccupère l'id de l'élément et on le passe en paramètre dans la route
	//res.send(`vous avez demandé le pokemons ${pokemon.name}`)
	//res.send(`salut, Bulbizare !`))
	//on afiche le message de succès da l'API
	const message = 'La liste des 12 pokemons au forma json.';
	//res.json(helper.success (message, pokemon))//on appel la méthode success de helper.js
	res.json(success (message, pokemon))//on réecris le code précédant grace
	//à la nouvelle syntaxe du code écrit en ligne 6
	//retourner une repons au format json
	//res.json(pokemon)

})
//***********************************//
//reccupérer et ajouter des fichier depeuis un composent array data 
	//aficher dans le nombre d'éléments contenus dans le array list 
    //construction de la route avec la méthode GET.
    app.get('/api/pokemons', (req, res) => {
    	const nombrepokemons = pokemons
    	//const nombrepokemons = pokemons.length()//il compte les éléments du tableaux
    	//for(let i=0; i>=12; i++){
    		//pokemons.
    	//}
    	const message = 'La liste des 12 pokemons au forma json.';
    	//res.send(`Il y a ${nombrepokemons} pokemons dans la pokedes pour le moment`)
    	//on vas retourner les pockemon au forma Json
    	//res.send(`Il y a ${nombrepokemons} pokemons dans la pokedes pour le moment`)
    	res.json(success (message, nombrepokemons))
    	
    })
    //insertion creation d'un pokemons grace à la méthode POST
    app.post('/api/pokemons', (req, res) => {//definition du poin dentré avec l'URL pour spécifier à express
    	const id = getUniqueId(pokemons) //declaration d'une variabele aléatoir
    	const pokemonCreated = {...req.body, ...{id: id, created: new Date()}}
         pokemons.push(pokemonCreated)//ajou ds le tableaux
         const message = `Le pokemon ${pokemonCreated.name} a bien été crée.`
         res.json(success(message, pokemonCreated))

    })
    
app.listen(port, () => console.log(`Notre application es démaré sur: http://localhost:${port}`))//on demare l'API pour aficher les infos de notre apliction 


