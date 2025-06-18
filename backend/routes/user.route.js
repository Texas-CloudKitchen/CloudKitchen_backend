//profile
//logout
//update profile
//resetPassword-manual
import express from "express";
import { authenticate } from "../middleware/authentication.js";
import { authorizeUser } from "../middleware/authorization.js";
import {profile} from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.get("/profile", authenticate, authorizeUser("consumer"), profile)

export {userRouter}