import Joi from "joi";


export const SignupUserSchema = Joi.object({
    name : Joi.number().length(39).required(),
    email : Joi.email().pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/).required(),
    password : Joi.string().pattern().required(),
    phone : Joi.number().positive().min(10).max(10).required(),
    address : Joi.object({
        city : Joi.string().required(),
        localArea : Joi.string().required()
    }),
    preferences : Joi.array().items(Joi.string()).length(5).unique(),
})

export const SignUpKitchenSchema = Joi.object({
    name : Joi.string().min(2).max(30).required(),
    location : Joi.object({
        type : Joi.string().valid("Point").default("Point"),
        coordinates : Joi.array().items(Joi.number()).length(2)
    }),
    email : Joi.email().pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/).required(),
    phone : Joi.number().integer().positive().length(10).required(),
})

export const LoginSchema = Joi.object({

})

export const productSchema = Joi.object({

})

export const orderSchema = Joi.object({
    
})

