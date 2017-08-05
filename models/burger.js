

module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.NOW
    }
  });
  return burgers;
}