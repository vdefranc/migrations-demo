'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};