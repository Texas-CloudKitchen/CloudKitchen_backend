import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : "users"},
    cloudKitchen : {type : mongoose.Schema.Types.ObjectId, ref : "kitchens"},
    rating : {type : String, enum : ["0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5",], required : true},
    content : {type : String, minlength : 3, maxlength : 98}
})

const reviews = mongoose.model("reviews", reviewSchema)

export {reviews}