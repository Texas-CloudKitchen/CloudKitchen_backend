import { users } from "../models/user.model.js"


const seeAlluser = async(req, res, next) => {
    try{
        const Allusers = await users.find({})
        res.json(Allusers)
    }
    catch(err){
        next(err)
    }
}

const deleteAllUser = async(req,res,next) => {
    try{
        await users.deleteMany({})
        res.json({message : "deleted"})
    }
    catch(err){
        next(err)
    }
}

export {seeAlluser, deleteAllUser}