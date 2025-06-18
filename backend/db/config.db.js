import mongoose from "mongoose"
export const connectDB = async(url) => {
    try{
        await mongoose.connect(url)
        console.log("database is connected boys and girls")
    }
    catch(err){
        console.log("Couldnt connect with database")
    }
}