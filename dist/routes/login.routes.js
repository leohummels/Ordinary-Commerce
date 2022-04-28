"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controller/login.controller");
const router = (0, express_1.Router)();
router.post('/login', login_controller_1.UserLogin.login);
exports.default = router;
