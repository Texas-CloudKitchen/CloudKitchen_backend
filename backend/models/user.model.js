
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 2, maxlentgh : 35},
    email : {type : String, required : true, unique : true},
    password : {type : String},
    phone : {type : Number, unique : true},
    via : {type : String, enum : ["google","facebook", "manual"]},
    role : {type : String, enum : {values : ["consumer", "producer", "admin", "superadmin"], message : "Please choose a valid role"}},
    location :{
        type : {type : String, enum : ["Point"]},
        coordinates : [Number]
    },
    isVerified : {type : Boolean, default : false}, 
    proifle_image : {type : String},

    //only use for manual users
    verificationToken : String,
    verificationTokenExpiresIn : Date,
    resetPasswordToken : String,
    resetPasswordTokenExpiresIn : Date,
},{
    timestamps : true,
    versionKey : false
})

const users = mongoose.model("users", userSchema)

export {users}