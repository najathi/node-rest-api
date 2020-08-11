const Joi = require('@hapi/joi');

const postValidation = data => {
    const scheme = Joi.object({
        title: Joi.string().min(6).required(),
        description: Joi.string().min(6).required(),
    });

    return scheme.validate(data);
}

module.exports.postValidation = postValidation;
