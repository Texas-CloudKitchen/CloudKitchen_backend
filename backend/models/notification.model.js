import mongoose from "mongoose";

const notifiSchema = new mongoose.Schema({
    name : {type : String, enum : {values : ["cancelled", "order placed", "order recieved", "reviews"]}},
    user : {type : mongoose.Schema.Types.ObjectId, ref : "users"},
    Cloudkitchen : {type : mongoose.Schema.Types.ObjectId, ref : "kitchens"},
    contnent : {type : String, required : true, minlength : 2, maxlength : 35},
}, {timestamps : true, versionKey : false})

const notifications = mongoose.model("notifications", notifiSchema)

export {notifications}