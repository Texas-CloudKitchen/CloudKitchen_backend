//authenticate whether the user is authenticated or not....check for the token(verify the token)
import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    try{
        const accessToken = req.cookies.accessToken
        const data = jwt.verify(accessToken, process.env.access_token_secret_key)
        req.user = data
    }
    catch(err){
        next(err)
    }
}

export {authenticate}