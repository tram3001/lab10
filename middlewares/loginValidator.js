const {check} = require('express-validator')

module.exports=[
    check('email')
    .exists().withMessage("Cung cap email")
    .notEmpty().withMessage("Khong de trong email")
    .isEmail().withMessage("Email khong hop le"),

    check('password')
    .exists().withMessage("Cung cap mat khau")
    .notEmpty().withMessage("Khong de trong mat khau")
    .isLength({min: 6}).withMessage("Mat khau co it nhat 6 ky tu")
]