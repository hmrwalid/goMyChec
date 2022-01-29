const mongoose = require ('mongoose');
const {Schema, model} = mongoose;

PersonShcema = new Schema({
    name:{ type : String, required :true} ,
    age: Number,
    favoriteFoods: [String],
});
const PersonDB = model("person", PersonShcema);

module.exports = PersonDB;