import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : "users"},
    kitchen : {type : mongoose.Schema.Types.ObjectId, ref : "kitchens"},
    quantity : {type : Number, min : 1, required : true},
    item : {type : mongoose.Schema.Types.ObjectId, ref : "foods"},
    status : {type : String, enum : ["pending", "accepted", "preraring", "completed"], default : "pending"},
    prefernce : {type : String, minlength : 4, maxlength : 55 },
},{timestamps : true, versionKey : false})

const orders = mongoose.model("orders", orderSchema)

export {orders}