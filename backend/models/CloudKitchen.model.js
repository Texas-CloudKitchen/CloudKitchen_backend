//fields related to buisness and contains reference to the user(producer)
import mongoose from "mongoose";

const kitchenSchema = new mongoose.Schema({
    name : {type : String, required : true, unique : true},
    owner : {type : mongoose.Schema.Types.ObjectId, ref : "users"},
    kitchenImage : {type : String, required : true},
    address : {
        city : String,
    },
    menu : {type : mongoose.Schema.Types.ObjectId, ref : "menus"},
    PANnumber : {type : String, },
}, {timestamps : true, versionKey : false})

const kitchens = mongoose.model("kitchens", kitchenSchema)

export {kitchens}