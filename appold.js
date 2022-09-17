//console.log('salut je suis un node');
//const express = require('express')
//**utilisation de midlweres**
//importation du packet morgan qui permet de démarer le serveur à chaque momen t où on veux faire les testes
//CMD d'instalation **npm install morgan --save-dev**
//const morgan = require('morgan')
//importation de la dependance favicone qui est un midlewer pour instaler le favicone
//const favicon = require('serve-favicon')
//inportation du midle ware body parser qui permet de convertire une chaîne de caractère
//const bodyParser = require('body-parser')
//chemain vers le composent(fichier) sequelize.js
//const sequelize = require('./src/db/sequelize')

//importation de sequelize
//const {Sequelize, DataTypes} = require('sequelize')
//*** importation de l'objet DataTypes lors de l'importatio du model pokemonModel
//on importe le  composent helper avec require
//const helper = require('./helper.js')//pour aléger le code 
//onn va importer la méthode succes au lieux de helper
//ajoue de la nouvelle méthode **getUniqueId**
//***syncronisaition du model avec la base (importion du model)
//const PokemonModel = require('./src/models/pokemon')
//************************************
//const {success, getUniqueId} = require('./helper.js')
 //on reccupert express avec require qui indique à node d'aller chercher la depandanc express ds node moule
 //let pokemons = require('./mock-pokemon') //spéifier un chemain ver le composant mock-pokemon
//const app = express() //on cré une méthode avec le nom de l'iinstance(serveur web sur le qu'elle va fonctionner l'API REST)
//const port = 8000 //definition d'une constantr avec le port 3000 sur le qu'l'appli va tourner
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
//conexion de l'ORM maria db et Notre API
//const sequelize = new Sequelize(   
///'pokedex',
  //nom de la base de donnée
//'root',
 // login à la base de donnée

//'',
//{
	//host: 'localhost',
	//dialect: 'mariadb',
	//dialectOptions: {
	//	timezone: 'Etc/GMT-2'
	//},
////	logging: false

//})
//sequelize.authenticate()
//.then(_ => console.log('La connexion  à la base de donnée a bien été établie'))
//.catch(error => console.error(`imposible de se connecter à la base de donnée ${error}`))
//const pokemon = pokemonModel(sequelize, DataTypes)//extenciation du model pokemon
//ce qui veut dire de crérer la table pokemon associé au model en passant 
//en paramètre sequelize et DaataTypes
//sequelize.sync({force: true}) //permet de supprimer la table associer
//sync permet  de faire la syncronissation avec la base de donnée mysql
//.then(_ => { 
		//console.log('La base de donnée "pokedex" a bien été syncronisé.')
		
		//insertion d'une donnée dans la base au forma JSON
		//****insertion d'un pokemon*****
		//pokemon.create({
		//name: "Bulbizarre",
		//hp: 25,
		//cp: 5,
		//picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
		//types: ["plante", "Poison"].join()//join() cette méthodee permet d'enregistrer
		//un tableaux dans la base  ds un cchampavec le type string
		//created: new Date()
		//}).then(Bulbizzare  => console.log(Bulbizzare.toJSON()))//toJSON est fourni
		//par l'ORM est recommandé pour aficher correctement les informations
		//des instances qui nous intereste
		//then permet de faire la requette vers la base de donnée
		//grace à L'ORM sequeliz afin de s'assurer que tous ce passe bien
		//********fin de l'ajou d'un élément
		//})
		//pokemon.create({
		//name: "Salamèche",
		//hp: 28,
		//cp: 6,
		//picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
		//types: ["Feu"].join()
		//}).then(Salamèche  => console.log(Salamèche.toJSON()))//toJSON est fourni
		//par l'ORM est recommandé pour aficher correctement les info
		//***Ajou des 12 pokemon***
	//pokemons.map(pokemon => {
		//pokemon.create({
			//name: pokemon.name,
			//hp: pokemon.hp,
			//cp: pokemon.cp,
			//picture: pokemon.picture,
			//types: pokemon.types.join()
		//}).then(Bulbizzare  => console.log(Bulbizzare.toJSON()))
	//})
//})

//app
//.use(favicon(__dirname + '/favicon.ico'))//ici on appel le favicone
//.use(morgan('dev'))//utilisation du middlware avec le la dépendance morgan
//.use(bodyParser.json())//utilisation du midlwer Bodyparser
//sequelize.initDb()

//app.get('/', (req,res) => res.send(`salut je suis new de express et j'apprend node avec des scriptes j'ais hate de la suite`))//le point d'entré de notre aplication
//get est la methode qui prend le chemain de la terminèson
// la fonction avec des arguments req(qui reccupère un objet riques qui reccupère un objet en entré)
//res(qui correspond à l'objet à renvoyer au client)
//methode send de l'objet respons pour envoyer le resulta
//**************************************************
//ajoutont une nouvell route les unpoint(les  points dentré)
//point de terminaisonExpress = app.METHOD(CHEMAIN, GESTIONAIRE(res,res)) 
//est un exemple de route avec expressjs
//***********************************//
//reccupérer et ajouter des fichier depeuis un composent array data 
	//aficher dans le nombre d'éléments contenus dans le array list 
    //construction de la route avec la méthode GET.
    //app.get('/api/pokemons', (req, res) => {
    	//const nombrepokemons = pokemons
    	//const nombrepokemons = pokemons.length()//il compte les éléments du tableaux
    	//for(let i=0; i>=12; i++){
    		//pokemons.
    	//}
    	//const message = 'La liste des 12 pokemons au forma json.';
    	//res.send(`Il y a ${nombrepokemons} pokemons dans la pokedes pour le moment`)
    	//on vas retourner les pockemon au forma Json
    	//res.send(`Il y a ${nombrepokemons} pokemons dans la pokedes pour le moment`)
    	//res.json(success (message, nombrepokemons))
    	
    //})

    //ajouter une nouvelle route avec une url
//app.get('/api/pokemons/:id', (req, res) => {
	//extraction de l'id
	//const id = parseInt(req.params.id) //avec la méthode parseInt on converti une chaîne de caractère en INT
	//const pokemon = pokemons.find(pokemon => pokemon.id === id)
	//on reccupère l'id de l'élément et on le passe en paramètre dans la route
	//res.send(`vous avez demandé le pokemons ${pokemon.name}`)
	//res.send(`salut, Bulbizare !`))
	//on afiche le message de succès da l'API
	//const message = 'La liste des 12 pokemons au format json.';
	//res.json(helper.success (message, pokemon))//on appel la méthode success de helper.js
	//res.json(success (message, pokemon))//on réecris le code précédant grace
	//à la nouvelle syntaxe du code écrit en ligne 6
	//retourner une repons au format json
	//res.json(pokemon)

//})
    //insertion creation d'un pokemons grace à la méthode POST
    //app.post('/api/pokemons', (req, res) => {//definition du poin dentré avec l'URL pour spécifier à express
    //	const id = getUniqueId(pokemons) //declaration d'une variabele aléatoir
    //	const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
      //   pokemons.push(pokemonCreated)//ajou ds le tableaux
        // const message = `Le pokemon ${pokemonCreated.name} a bien été crée.`
         //res.json(success(message, pokemonCreated))
    //})
    //modifier une donner avec 	APi REST
    //l'opperation put permet de modifier les donées
    //app.put('/api/pokemons/:id', (req,res) => {
    //	const id = parseInt(req.params.id)
    //	const pokemonUpdated = { ...req.body, id: id }
    //	pokemons = pokemons.map(pokemon => {
    		//mètre à jour la liste global de pokemon
    		//en remplacant l'anciène par la nouvelle
    		//grace à map on retourne la liste à jour de pokemons
    //		return pokemon.id === id ? pokemonUpdated : pokemon
    		//}traitement de la modification
    //	})
    //	const message = `Le pokemon ${pokemonUpdated.name} a bien été modifier.`
    //	res.json(success(message, pokemonUpdated))
    //})
    //**Suprssion des pokemons***
    //suppression grace à son id
    //le fonction filter permet de faire la supression
    //app.delete('/api/pokemons/:id', (req, res) => {
    //	const id = parseInt(req.params.id)
    //	const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    //	pokemons.filter(pokemon => pokemon.id !== id)

    //	const message = `Le pokemon ${pokemonDeleted.name} a bien été supprimé `
    //	res.json(success(message, pokemonDeleted))
    //})

app.listen(port, () => console.log(`Notre application es démaré sur: http://localhost:${port}`))//on demare l'API pour aficher les infos de notre apliction 


