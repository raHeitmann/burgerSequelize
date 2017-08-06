var mysql = require("mysql");
var connection;
var Sequelize = require("sequelize");
if (process.env.JAWSDB_URL){
  var sequelize = mysql.createConnection(process.env.JAWSDB_URL);
} else{
var sequelize = new Sequelize("burgers_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});
};


module.exports = sequelize;