const notFound = (req,res,next) => {
    const err = new Error(`${req.method} for ${req.url}`)
    err.status = 404
    next(err)
}

const errorHandler = (err,req,res,next) =>{
    const message = err.message
    const status = err.status || 500
    res.json({
        error : message,
        status,
        stack : (process.env.state == "development") ? err.stack : undefined
    })
}

export {notFound, errorHandler}