const mongoose = require("mongoose");


let Schema = mongoose.Schema({
	username:{type:String,unique:true},
	profilePicture:String,
    TokenLink:String,
    description:String,
    dateJoined:String,
    reviews:String,
    favourites:String,
    authLevel:String
})

module.exports = mongoose.model("User",Schema);