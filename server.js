var express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path : "./.env"});
const connectDB = require ('./config/connectDB')
const PersonDB = require("./models/model");
var app = express();

//database connection
const port =process.env.port 
connectDB();
// Create and Save a Record of a Model

const user = new PersonDB({name :"youssef", age :31, favoriteFoods:["pizza", "Kaftejy"] })
//user.save((err)=>err? console.log(err): console.log("creation succeded:", user));

/* -------------------------------------------------------------------------------------*/

//Create Many Records with model.create()

//PersonDB.create({name :"monica", age :24, favoriteFoods:["Makloub", "mlewi"]},{name :"jasser", age :21, favoriteFoods:["spaghetti", "pizza"]},
//(err)=>err?  console.log(err): console.log("creation succeded:"))

/*-----------------------------------------------------------------------*/
// Use model.find() to Search Your Database

/* const search = async()=>{
  try {
       const data= await PersonDB.find({});
       console.log(data);
    } catch (error) {
        console.log(error);
    }
}
search(); */
/*--------------------------------------------------------*/


  // Use model.findOne() to Return a Single Matching Document from Your Database

  /*const SearchOne = async()=>{
    try {
         const data= await PersonDB.findOne({name : "monica"});
         console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  SearchOne();*/

/*--------------------------------------------------------------------*/

// Use model.findById() to Search Your Database By _id  

/*const SearchId = async()=>{
    try {
         const data= await PersonDB.findById("61f2e5109fe9a2ec9e62b44c").exec();
         console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  SearchId();*/
/* ----------------------------------*/
//Perform Classic Updates by Running Find, Edit, then Save

/*const updateArray = async()=>{
    try {
         const data= await PersonDB.findById("61f2e5109fe9a2ec9e62b44c").exec();
          await data.favoriteFoods.push("hamburger");
          await data.save();
         console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  updateArray();*/

/* --------------------------------------------------*/
// Perform New Updates on a Document Using model.findOneAndUpdate()

/*const query = { name: 'jasser' };
const SearchAndUpdate = async()=>{
    try {
         const data= await PersonDB.findOneAndUpdate(query, {age : 20}, { new: true } )
         console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  SearchAndUpdate();*/
  /*------------------------------------------------------*/

  //Delete One Document Using model.findByIdAndRemove
   /*const SearchAndDelete = async()=>{
    try {
         const data= await PersonDB.findByIdAndRemove("61f2e5109fe9a2ec9e62b44c")
         console.log(data);
      } catch (error) {
          console.log(error);
      }
  }

  SearchAndDelete();
  */

  /*---------------------------------------------------------------*/

  //PersonDB.create({name :"salah", age :14, favoriteFoods:[" burritos", "mlewi"]},{name :"ossema", age :51, favoriteFoods:[" burritos", "pizza"]},{name :"marco", age :21, favoriteFoods:[" burritos", "pizza"]},
  //(err)=>err?  console.log(err): console.log("creation succeded:")) 
/*--------------------------------------------------------*/

  //  Delete Many Documents with model.remove()
  /*var removeMary = function done(){
       var nameRemove = "ossema";
       PersonDB.remove({name : nameRemove}, (error, result)=>{
           if(error){
               console.log(error.toString());
           }else{
               done(null, result);
           }
       })
   }
 removeMary(); */
  /*--------------------------------------------------*/
 // Chain Search Query Helpers to Narrow Search Results
 var queryChain = function done() {
    var foodToSearch = "burritos";
    PersonDB.find({favoriteFoods:foodToSearch}).sort({ name: 1 }).limit(2).select('-age').exec((err,data) =>{   
     
      err ? done(err): done(null, data);
      
    })
    
  };
  queryChain();


  /*-----------------------------------------------------*/
  app.listen(port,(err)=>{
    err? console.log("error", err.toString()): console.log(`server is running in ${port}`)
})
