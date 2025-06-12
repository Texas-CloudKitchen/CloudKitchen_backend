//authenticate user based on theri role...to check whether they are authorized for the route or not

const authorizeUser = (...roles) => {
    return async(req,res,next) => {
        try{
            if(!roles.includes(req.user.role)){
                const err = new Error("Not authorized")
                err.status = 403
            }
            else{
                next()
            }
        }
        catch(err){
            next(err)
        }
    }
}

export {authorizeUser}