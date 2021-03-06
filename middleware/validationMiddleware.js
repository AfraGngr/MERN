const { check } = require("express-validator");

exports.categoryValidation = [
    check("categoryName","Please enter a name min 2 and max 20 chars").isLength({min:2, max:20}),
    check("description","Max 200 chars are allowed.").isLength({max:200}),
]