const { checkSchema } = require("express-validator");
const messages = require("../../config/messages");
const { getUserByEmail } = require("../services/internal/user");

const signUpValidator = async (req, res, next) => {
    const emailExist = await getUserByEmail(req?.body?.email);
    await checkSchema({
        username: { notEmpty: { errorMessage: messages?.usernameIsRequired } },
        password: { notEmpty: { errorMessage: messages?.passwordIsRequired } },
        confirmPassword: {
            notEmpty: { errorMessage: messages?.confirmPasswordIsRequired },
            custom: {
                options: () => {
                    return req?.body?.password !== req?.body.confirmPassword ? false : true;
                },
                errorMessage: messages?.passwordNotMatching,
            },
        },
        email: {
            notEmpty: { errorMessage: messages?.emailIsRequired, bail: true },
            isEmail: { errorMessage: messages?.emailIsInvalid, bail: true },
            custom: {
                options: () => {
                    return emailExist ? false : true;
                },
                errorMessage: messages?.emailIsUnique,
            },
        },
    }).run(req);
    next();
};

module.exports = (errorFormatter) => ({
    signUpValidator: [signUpValidator, errorFormatter],
});
