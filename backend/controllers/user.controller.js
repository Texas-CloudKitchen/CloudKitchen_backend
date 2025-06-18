import { users } from "../models/user.model.js";

const profile = async(req,res, next) => {
    try{
        const user = await users.findById(req.user._id)
        res.json(user)
    }
    catch(err){
        next(err)
    }
}

export {profile}