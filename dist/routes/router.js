"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controller/controllers");
//const controller = 
const router = (0, express_1.Router)();
router.post('/somepost', controllers_1.insertOne);
router.get('/products/:id', controllers_1.getProductByID);
router.get('/getAll', controllers_1.getAll);
router.put('/products/:id', controllers_1.putProduct);
exports.default = router;
