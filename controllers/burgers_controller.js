// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");
// var burger = require("../models/burger.js");
var db = require("../models");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  console.log(req.body);
    db.burgers.create({
      burgerName: req.body.name,
      devoured: false,
      // date: req.body.date
    }).then(function() {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect("/");
    });


});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

    db.burgers.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
