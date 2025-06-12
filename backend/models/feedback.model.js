import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true, match : /^[a-zA-Z0-9._%+-]+@gmail\.com$/},
    message : {type : String, required : true, minlength : 3, maxlength : 105}
},{timestamps : true, versionKey : false})

const feedbacks = mongoose.model("feedbacks", feedbackSchema)

export {feedbacks}