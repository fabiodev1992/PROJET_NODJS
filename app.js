//console.log('salut je suis un node');
const express = require('express')
//on importe le  composent helper avec require
//const helper = require('./helper.js')//pour aléger le code 
//onn va importer la méthode succes au lieux de helper
const {success} = require('./helper.js')
 //on reccupert express avec require qui indique à node d'aller chercher la depandanc express ds node moule
 let pokemons = require('./mock-pokemon') //spéifier un chemain ver le composant mock-pokemon
const app = express() //on cré une méthode avec le nom de l'iinstance(serveur web sur le qu'elle va fonctionner l'API REST)
const port = 3000 //definition d'une constantr avec le port 3000 sur le qu'l'appli va tourner
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
	const message = 'Un pokemon a bien été retouvé.'
	//res.json(helper.success (message, pokemon))//on appel la méthode success de helper.js
	res.json(success (message, pokemon))//on réecris le code précédant grace
	//à la nouvelle syntaxe du code écrit en ligne 6
	//retourner une repons au format json
	//res.json(pokemon)

})
//***********************************//
//reccupérer et ajouter des fichier depeuis un fichier 
	//aficher dans le nombre d'éléments contenus dans le array list 
    //construction de la route avec la méthode GET.
    app.get('/api/pokemons', (req, res) => {
    	const nombrepokemons = pokemons.length
    	res.send(`Il y a ${nombrepokemons} pokemons dans la pokedes pour le moment`)
    	
    })





app.listen(port, () => console.log(`Notre application es démaré sur: http://localhost:${port}`))//on demare l'API pour aficher les infos de notre apliction 


