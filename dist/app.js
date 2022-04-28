"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const custumer_routes_1 = __importDefault(require("./routes/custumer.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
exports.app = (0, express_1.default)();
const router = router_1.default;
const custumerRoutes = custumer_routes_1.default;
const loginRoutes = login_routes_1.default;
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use(router);
exports.app.use(custumerRoutes);
exports.app.use(loginRoutes);
exports.server = exports.app.listen(3000, () => {
    console.log('Running...');
});
