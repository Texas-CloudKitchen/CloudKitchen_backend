import querystring from "querystring"
import {users} from "../models/user.model.js"
import { generateAccessAndRefreshToken } from "../utils/jwt.js"
import { setCookie } from "../utils/cookie.js"

const oAuth = async(req, res, next) => {
    try{
        const via = req.query.via
        if(via == "google"){
            res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=profile%20email&prompt=consent`)
        }
        else if(via == "facebook"){
            res.redirect( `https://www.facebook.com/v17.0/dialog/oauth?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.FACEBOOK_REDIRECT_URI}&response_type=code&scope=email%20public_profile%20user_location&auth_type=rerequest`)
        }
    }
    catch(err){
        err.status = 404
        next(err)
    }
}

const googleCallback = async(req, res, next) => {
    try{
        const code = req.query.code
        if(!code){
            const err = new Error("No code recieved")
            err.status = 404
            throw err
        }

        const responseToken = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: querystring.stringify({ 
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code'
        })})
        const {access_token} = await responseToken.json()

        const responseData =  await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            method : 'GET',
            headers: { Authorization: `Bearer ${access_token}`}
        })

        const user_data = await responseData.json() 
        console.log(user_data)
        
        const isEmailExist = await users.findOne({email : user_data.email})
        if(!isEmailExist){
            const user = await users.create({
                name: user_data.name,
                proifle_image: user_data.picture,
                email: user_data.email,
                via : "google",
                role : "consumer",
                isVerified: true,
            })
            console.log(user.phone)
            const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
            setCookie(res, "accessToken", accessToken)
            setCookie(res, "refreshToken", refreshToken)
            res.redirect("http://localhost:5173/")
        }
        else{
            const user = await users.findOne({email : user_data.email})
            const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
            setCookie(res, "accessToken", accessToken)
            setCookie(res, "refreshToken", refreshToken)
            // res.send("logged in the user")
            res.redirect("http://localhost:5173/")
        }
    }
    catch(err){
        next(err)
    }
}


const facebookCallback = async(req,res,next) => {
    try{
        const code = res.query.code
        if(!code){
            const err = new Error("No code recieved")
            err.status = 404
        }
        const responseToken = await fetch(`https://graph.facebook.com/v17.0/oauth/access_token?${querystring.stringify({ 
        client_id: appId,
        redirect_uri: redirectUri,
        client_secret: appSecret,
        code
    })}`)

        const {access_token} = await responseToken.json()
        const responseData = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`)

        const profile = await responseData.json()
        res.json(profile)

        const isEmailExist = await users.findOne({email : profile.email})
        if(!isEmailExist){
            const user = await users.create({
                name : profile.name,
                email : profile.email,
                
            })
            const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
            setCookie(res,"accessToken", accessToken)
            setCookie(res, "refreshToken", refreshToken)
            res.status(201).json(user)
        }
        else{
            const user = await users.findOne({email : profile.email})
            const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
            setCookie(res,"accessToken", accessToken)
            setCookie(res, "refreshToken", refreshToken)
            res.end("logged in")
        }
    }
    catch(err){
        next(err)
    }
}

export {oAuth,googleCallback,facebookCallback}