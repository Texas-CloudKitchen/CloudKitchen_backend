//contains menu of the buisness(cloud), field that are related to the food provided by the user 
import { required } from "joi";
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    category : {type : String, enum : {values : ["breakfast", "cold drinks", "lunch"], message : "please choose a valid option"}, required : true},
    name : {type : String, required : true },
    price : {type : Number, required : true}
},{versionKey : false})

const menuSchema = new mongoose.Schema({
    kitchen : {type : mongoose.Schema.Types.ObjectId, ref : "kitchens"},
    food : [foodSchema]
}, {timestamps : true, versionKey : false})

const foods = mongoose.model("foods", foodSchema)
const menus = mongoose.model("menus", menuSchema)

export {menus}