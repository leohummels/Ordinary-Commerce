"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controller/product.controllers");
const controller = new product_controllers_1.Controller;
const router = (0, express_1.Router)();
//Product Routes
router.post('/products/post', controller.insertOne);
router.get('/products/:id', controller.getProductByID);
router.get('/list/:list', controller.getAll);
router.put('/update/:id', controller.putProduct);
router.delete('/products/:id', controller.deleteProduct);
exports.default = router;
