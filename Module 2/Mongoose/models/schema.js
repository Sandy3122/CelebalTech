const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking : {
        type : Number,
        require : true,
        unique:true
    },
    name:{
        type : String,
        required : true,
        trim:true           // Automatically trims leading and trailing whitespac
    },
    dob:{
        type : Date,
        required : true,
        trim:true
    },
    country:{
        type : String,
        required : true,
        trim:true
    },
    score:{
        type : Number,
        required : true,
        trim:true
    },
    event:{
        type : String,
        default:"100ms"
    }        
    
})

//We are creating a new collection
const MensRanking = new mongoose.model("MensRanking", menSchema);

module.exports = MensRanking;