import { users } from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { setCookie } from "./cookie.js"
const generateAccessAndRefreshToken = async(userId) => {
    try{
        const user = await users.findById(userId)
        const accessToken = jwt.sign(
            {_id : user._id,
            name : user.name,
            email : user.email,
            role : user.role
        }, process.env.access_token_secret_key, {expiresIn : '1d'})
        const refreshToken = jwt.sign(
            {_id : user._id
        }, process.env.refresh_token_secret_key, {expiresIn : '10d'})
        return {accessToken, refreshToken}
    }
    catch(err){
        throw err
    }
}

export {generateAccessAndRefreshToken}