//VALIDATIONS
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
};

//login Validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
};

//product Validation
const productValidation = (data) => {
    const schema = {
        name: Joi.string().required(),
        description: Joi.string().required(),
        userId: Joi.string()
    }
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.productValidation = productValidation;

