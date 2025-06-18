//fields related to buisness and contains reference to the user(producer)
import { required } from "joi";
import mongoose from "mongoose";

const kitchenSchema = new mongoose.Schema({
    name : {type : String, required : true, unique : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    phone : {type : String, required : true, unique : true},
    location : {
        type : {type : String, enum : ["Point"]},
        coordinates : {type : [Number], required : true}
    },
    role : {type : String, enum : ["kitchen"], default : "Kitchen"},
    kitchenImage : {type : String, required : true},
    menu : {type : mongoose.Schema.Types.ObjectId, ref : "menus"},
}, {timestamps : true, versionKey : false})

kitchenSchema.index({ location: '2dsphere' });

const kitchens = mongoose.model("kitchens", kitchenSchema)

export {kitchens}