import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"
import rateLimit from "express-rate-limit"

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 50,
    message: {
        status : 429,
        message : "Too many requests, please try again later."
    }
    });

export const startMiddleware = (app) =>{   
    //paxi frontend bata origin fixed vhayepaxi and domain select vhaye paxi
    const allowedOrigins = [ "http://localhost:5175", "http://cloudKitchen"]
    app.use(limiter)
    app.use(cors({
        origin :allowedOrigins,
        credentials : true
    }))
    // app.use(morgan("dev"))
    app.use(express.json())
    app.use(express.urlencoded({extended : true}))
    app.use(cookieParser())
}