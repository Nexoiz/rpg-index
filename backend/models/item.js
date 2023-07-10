const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	title:{type:String,unique:true},
	description:String,
    image:String,
    tags:String,
    rpg:String,
    posVotes:Number,
    negVotes:Number,
    author:String,
    publisher:String,
    pubDate:String,
    pages:Number,
    links:String,
    setting:String,
    environments:String,
    difficulty:String,
    Series:String,
    Book:String,
	playerCount:String,
    pregens:String,
    maps:String,
    handouts:String,
    commonCreatures:String,
    notableCreatures:String,
    notableItems:String,
    notableSpells:String,
    lastEdited:String,
    pendingDBID:{type:String,unique:true},
    reviewDBID:{type:String,unique:true}
})

module.exports = mongoose.model("Item",Schema);