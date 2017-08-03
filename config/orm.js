var connection = require("./connection.js")

var orm = {
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, result){
            console.log(result);
      if (err) {
        throw err;
      }

      cb(result);
        });
     },

    insertOne: function(tableName, burgerName, cb){
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableName, burgerName.burger_name], function(err, result){
            console.log(result);
      if (err) {
        throw err;
      }

      cb(result);
        });
    },

    updateOne: function(tableName, devoured, condition, cb){
        var queryString = "UPDATE ?? SET devoured = ? WHERE "+condition;
        connection.query(queryString, [tableName, devoured.devoured], function(err, result){
            console.log(devoured);
      if (err) {
        throw err;
      }

      cb(result);
        });
    }
};

module.exports = orm;