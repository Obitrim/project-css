
/*
|-------------------------------------------------------------------------
|	Imports
|-------------------------------------------------------------------------
*/
const mongoose = require('mongoose');


const LeadersSchema = new mongoose.Schema({
	name: { type: String, required: true },
	position: { type: String, required: true }, 
	skills: { type: String, required: true },
	academicYear: { type: String, required: true },
	image: { 
		type: Buffer
	}
});

const LeadersModel = mongoose.model("Leaders", LeadersSchema);


module.exports = LeadersModel
