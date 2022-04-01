"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buyer_controllers_1 = require("../controller/buyer.controllers");
const buyController = new buyer_controllers_1.BuyerController;
const router = (0, express_1.Router)();
router.get('/buyerlist/:list', buyController.getAll);
exports.default = router;
