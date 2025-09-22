const mongoose=require('mongoose');
const cities=require('./cities')
const {places,descriptors}=require('./seedHelpers');

const Campground=require('../models/campground');  //Model -> collection

mongoose.connect('mongodb://localhost:27017/yelp-camp') ; // can have to change localhost to 127.0.0.1


const db=mongoose.connection;   // just to shorten up
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database connected");
});

const sample=(array)=> array[Math.floor(Math.random()*array.length)];
const seedDB = async ()=>{
    await Campground.deleteMany({});//deletes all the data present
  for(let i=0;i<50;i++){
    const random1000 = Math.floor(Math.random()*1000);
   const camp= new Campground({
        location:`${cities[random1000].city}, ${cities[random1000].state}`,
        title:`${sample(descriptors)} ${sample(places)}`
    })
    await camp.save();
  }
}

seedDB().then(()=>{
    mongoose.connection.close();
})