import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {type : String, required : true, unique : true, minlength : 2, maxlength : 20},
    category : {type : String, enum : {values : [""]}, message : "Choose a valid option"},
    price : {type : Number, required : true},
    time : {type : String, required : true},
    availableTill : Date,
    isCurrentlyAvailable : {type : Boolean, default : false},
    foodImage : {type : String, required : true},
    CloudKitchenName : {type : mongoose.Schema.Types.ObjectId, ref : "cloudKitchenName"},
},{timestamps : true, versionKey : false})

const foods = mongoose.model("foods", foodSchema)

export {foods}