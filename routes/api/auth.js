const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { validation, authentificate } = require("../../middlewares");

const { users: ctrl } = require("../../controllers");

const { joiSignupSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();
// signup
router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

// login
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

// current
router.get("/current", authentificate, ctrlWrapper(ctrl.getCurrent) )

// logout
router.post("/logout", authentificate, ctrlWrapper(ctrl.logout))

module.exports = router;
