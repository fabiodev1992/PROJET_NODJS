//exportation d'un objet avec 2paramètre en d'entré
module.exports = (sequelize, DataTypes) => {
  //sequelize est le conecteur à la base de donnée
  return sequelize.define('Pokemon', {
    //la propriété difine permet de déclarer un nouvell objet à sequelize
    //la propriété define prend en entré trois paramètre
    //le nom du model, la decription du model,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,//type de donné à insérer avec Datatypes
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
      //on defini un geteur. ce qui veut dire que à chaue fois que nous
      //recuperon le type d'un element si l'élément est de typz array
      get() {
        return this.getDataValue('types').split//avec split on transforme la chaine de caractère en tableaux
      },
      set(types) {  //les seteurs vont convertire le tableaux en chaîte de caractère
        this.setDataValue('types', types.join())//la méthod join() vas convertire le tableaux en chaîne de caactère pour la astcker ds la DB
      }
    }
  }, {
    timestamps: true,//permet d'indiquer que  nous allons modifier la table
    createdAt: 'created',//date de creation d'une instance
    updatedAt: false// modification
  })
}