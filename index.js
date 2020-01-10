/*
|-------------------------------------------------------------------------
|	Imports 
|-------------------------------------------------------------------------
*/

const express = require('express');
const mongoose = require('mongoose');
const {config, engine} = require("express-edge");


const app = new express();
app.use(express.static("public"));

/*
|------------------------------------------------------------------------
| Database connection connection
|------------------------------------------------------------------------
*/

// mongoose.connect('mongodb://localhost/css-db');

/*
|-------------------------------------------------------------------------
|	Express Edge Configuration
|-------------------------------------------------------------------------
*/
config({cache: process.env.NOD_ENV === 'production'});
app.use(engine);
app.set("views", `${ __dirname }/views`);


/*
|-------------------------------------------------------------------------
|	Application routes
|-------------------------------------------------------------------------
*/

app.get('/', (req, res) => {
	res.render("index");
});

app.get('/resources', (req, res) => {
	res.render('resources');
});


app.get('/forum', (req, res) => {
	res.render('forum');
});

app.get('/programmes', (req, res) => {
	res.render('programmes');
});

app.get('/people/:type', (req, res) => {
	res.render(`${ req.params.type }`);
});


app.get('/curriculum', (req, res) => {
	res.render('curriculum');
});

app.get('/dashboard', (req, res) => {
	res.render('dashboard');
})



app.listen(4000, () => console.log("App listening on port 4000"));
