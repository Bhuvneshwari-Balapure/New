const express = require("express");
const router = express.Router();
const UserCtrl = require("../controller/UserCtrl");
router.post("/create", UserCtrl.CreateUser);
router.post("/login", UserCtrl.LoginUser);
module.exports = router;
