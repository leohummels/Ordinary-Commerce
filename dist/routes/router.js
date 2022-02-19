"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controller/controllers");
//const controller = 
const router = (0, express_1.Router)();
router.post('/somepost', controllers_1.insertOne /*(req, res) => {
    res.send('some get route')
}*/);
exports.default = router;
