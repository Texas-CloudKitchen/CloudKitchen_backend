import express from "express"
import dotenv from "dotenv"
import { startMiddleware } from "./middleware/server.middleware.js"
import {notFound, errorHandler} from "./middleware/errorHandler.js"
import {connectDB} from "./db/config.db.js"
dotenv.config()
const app = express()

startMiddleware(app)
connectDB(process.env.db_url)

app.use(notFound)
app.use(errorHandler)

app.listen( process.env.port,(err)=>{
    if(err){
        console.log("error in starting server")
    }
    else{
        console.log("server started successfully om port", process.env.port)
    }
})