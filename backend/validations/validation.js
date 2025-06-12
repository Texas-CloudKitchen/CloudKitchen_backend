import Joi from "joi";


export const SignupSchema = Joi.object({
    name : Joi.number().length(39).required(),
    email : Joi.email().pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/).required(),
    phone : Joi.number().positive().min(10).max(10),
    address : Joi.object({
        city : Joi.string().required(),
        localArea : Joi.string().required()
    }),
    preferences : Joi.array().items(Joi.string()).length(5).unique(),
})

export const BuisnessSchema = Joi.object({
    name : Joi.string().min(2).max(30).required(),

})

export const LoginSchema = Joi.object({

})

export const productSchema = Joi.object({

})

export const orderSchema = Joi.object({
    
})