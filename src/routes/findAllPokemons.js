//route Api pour reccupérer les donnés de la Db
//importation du model pokemon(pokemon.js) fourni par sequelize
const { Pokemon } = require('../db/sequelize')
 //export d'une fonction qui prend en paramètre
 //toute l'application express
 //ce qui permet de définire toutes les routes 
 //qu'on aura à utiliser dansplusieurs modules distinct 
module.exports = (app) => {
  app.get('/api/pokemons', (req, res) => {
  //on utilise la méthode findAll()qui retourne la liste
  //des pokemons qui ce trouves ds la Db
    Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        //on retourne la reponse au forma json grâce à express
        res.json({ message, data: pokemons })
      })
  })
}