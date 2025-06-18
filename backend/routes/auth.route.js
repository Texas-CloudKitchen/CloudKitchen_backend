//signup-manual-sends-email-with-code
//signup-google
//signup-facebook
//verify-link-with-token
//refresh
//login
//login-google
//login-facebook
//forgetPassword-manual only
//resetPassword-manual-only
import express from "express";
import { facebookCallback, googleCallback, oAuth } from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.get("/oAuth",oAuth)
authRouter.get("/google", googleCallback)
authRouter.get("/facebook", facebookCallback)


export {authRouter}