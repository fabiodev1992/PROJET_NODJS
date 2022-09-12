exports.success = (message, data) => {
	//declaration d'une methode success qui pren 2 paramètre
	return {message, data}
}
//exports.success //exportation de la méthode
//Ajoue d'une méthode pour reccupérer 
//l' uniqui id de chaque pokemons
exports.getUniqueId = (pokemons) => {
//transformer le tableaux de pokomon en un tableaux d'idenifiant des pokomon
//grasse à la méthode map de js qui fonctionne comme la boucle for
//et retoure un nouveaux tableaux
	const pokemonsIds = pokemons.map(pokemon => pokemon.id)
//on calcule l'id existant le plus grand pami la liste des id 
//de pokemon existant gra à la méthode js reduce
//qui permet de comparer les élément 2 à 2 dans un tableaux
//cette méthode nous retourne la constante maxId
const maxId = pokemonsIds.reduce((a,b) => Math.max(a, b))
//retourner la valeur de cette constante en ingrémentant
const uniqueId = maxId + 1
return uniqueId
}