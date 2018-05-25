const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const exphbs = require("express-handlebars");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', function(req, res) {
  db.Pet.findAll()
    .then(petsObjs => {
      const pets = petsObjs ? petsObjs.map(po => po.dataValues) : {};


      res.render('index', { pets });
    })
})

app.post('/', function(req, res) {
  const pet = req.body;

  db.Pet.create(pet)
    .then(result => res.redirect('/'));
})

app.listen(3000);
