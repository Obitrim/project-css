/*
|-------------------------------------------------------------------------
|	Imports 
|-------------------------------------------------------------------------
*/

const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// custom Imports
const LeadersModel = require('./models/LeadersModel');


const app = new express();
app.use(express.static('public'));

/*
|------------------------------------------------------------------------
| Database connection connection
|------------------------------------------------------------------------
*/

mongoose.connect('mongodb://localhost/test-db', { useNewUrlParser: true, useUnifiedTopology: true});

// const userSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// });

// const userModel = mongoose.model("User", userSchema);

// userModel.create({
// 	name: "Paul",
// 	age: 22
// });
// userModel.insertMany([{name: "Angella", age: 26},{name:"Rejoice", age: 17}]);

// userModel.findOne({ name: "Angella" }, (err, user) => console.log(user._id));



// LeadersModel.create([{
// 	name: "Obitrim Angella",
// 	position: "President",
// 	skills: "Competitive Programmer",
// 	academicYear: "2019/2020",
// 	image: fs.readFileSync(path.join(__dirname, "public/images/bg-sm.jpg"))
// }], (err, leaders) => {
// 	if(err){
// 		throw new Error("Error in saving a Leader");
// 	}

// 	console.log(leaders);
// });

LeadersModel.find({}, (err, leaders) => {
	if(err) throw new Error("Couldn't fetch Leaders");

	console.log(leaders);
})

app.listen(4000, () => console.log("App listening on port 4000"));
