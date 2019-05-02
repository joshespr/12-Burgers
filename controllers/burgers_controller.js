// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Export routes for server.js to use.
module.exports = function(app) {

  app.get("/", function(req, res) {
      console.log("Route Path Hit");
      burger.selectAll(function(data) {
        handlebarsObject = {
          burger: data
        };
        console.log("Diplayed Burgers");
        res.render("index", handlebarsObject);
      });

  });

  app.post("/api/burger", function(req, res) {
    console.log("burger Route Hit");
    burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
      console.log(result);
      res.json(result);
    });
  });

  app.put("/api/burger/:id", function(req, res) {

    let burgerID = req.params.id
    let condition = "id = " + burgerID ;

    console.log("UPDATE request: ID #"+ burgerID);
    console.log("where devoured is " + req.body.devoured);

    burger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
      console.log("Executing First Declared CallBack");
      res.json(result);
    });
  });
};
















