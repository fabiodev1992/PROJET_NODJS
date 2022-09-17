//connexion à la base de donnée
//gestion des models
//Le paramèttre DataTypes qui contion les types de doné du modèl
const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const pokemons = require('./mock-pokemon')
  //Connexion à la base de donnée
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  //insertion des données dans la base
const Pokemon = PokemonModel(sequelize, DataTypes)
  
const initDb = () => {
	//synchronisation des tables pour créer la table
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types
      }).then(pokemon => console.log(pokemon.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Pokemon //permet d'initialiser la base de donnée et le model pokemon
}