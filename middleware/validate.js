const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(30),
        email: Joi.string().min(6).max(30),
        password: Joi.string().min(6).max(30)
    })
    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(30),
        password: Joi.string().min(6).max(30)
    })
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation