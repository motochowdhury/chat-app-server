const { check, validationResult } = require("express-validator");
const unlink = require("fs");
const path = require("path");

const addUserValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is Required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet"),
  check("email")
    .isEmail()
    .withMessage("Invalid Email Address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await user.findOne({ email: value });
        if (user) {
          throw createError("Email already is use!");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", { strictMode: true })
    .withMessage("Mobile number must be a Bangladeshi valid mobile number")
    .custom(async (value) => {
      try {
        const user = await user.findOne({ mobile: value });
        if (user) {
          throw createError("Mobile Number already is use!");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password Must be contain atleast 8 character and OneLowerCase and oneUppercase and one number and one symbol"
    ),
];

const addUserValidationHandler = function (req, res, next) {
  const error = validationResult(req);
  const mappedError = error.mapped();
  if (Object.keys(mappedError).length === 0) {
    next();
  } else {
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(path.join(__dirname, `/../public/uploads/avatars/${filename}/`)),
        (err) => {
          if (err) console.log(err);
        };
    }
  }

  // response the eroor
  res.status(500).json({
    error: mappedError,
  });
};

// export modules
module.exports = { addUserValidator, addUserValidationHandler };
