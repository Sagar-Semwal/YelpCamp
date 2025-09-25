const mongoose=require('mongoose')
const Schema = mongoose.Schema;   //just to shorten up

const CampgroundSchema=new Schema({  //Schema 
    title:String,
    image:String,
    price:Number,
    description:String,
    location:String
});

module.exports=mongoose.model('Campground',CampgroundSchema); //Model