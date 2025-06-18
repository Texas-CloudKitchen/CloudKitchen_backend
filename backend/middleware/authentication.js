//authenticate whether the user is authenticated or not....check for the token(verify the token)
import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    try{
        const accessToken = req.cookies.accessToken
        if(!accessToken){
            const err = new Error("no token")
            err.name = "NoTokenAvailable"
            throw err   
        }
        const data = jwt.verify(accessToken, process.env.access_token_secret_key)
        req.user = data
    }
    catch(err){
        err.status = 401
        if(err.name == "TokenExpiredError") err.message = "Token expired"
        else if(err.name == "JsonWebTokenError") err.message = "Invalid token"
        next(err)
    }
}

export {authenticate}