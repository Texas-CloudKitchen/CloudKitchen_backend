import { getReasonPhrase} from "http-status-codes"

const notFound = (req,res,next) => {
    const err = new Error(`${req.method} for ${req.url}`)
    err.status = 404
    err.name = "NotFound"
    next(err)
}

const errorHandler = (err,req,res,next) =>{
    const status = err.status || 400
    const reason = getReasonPhrase(status)
    const message = err.message
    res.json({
        type : err.name,
        error : message,
        reason,
        status,
        stack : (process.env.state == "development") ? err.stack : undefined
    })
}

export {notFound, errorHandler}