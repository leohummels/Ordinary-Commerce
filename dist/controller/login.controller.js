"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
const login_service_1 = require("../service/login/login.service");
class UserLogin {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginParams = req.body;
            try {
                const validate = yield login_service_1.LoginService.userLogin(loginParams.email, loginParams.password);
                const str = "http://localhost:3000/home/" + encodeURIComponent(validate);
                if (validate !== false) {
                    res.status(200).redirect(str);
                }
                else {
                    res.status(200).send("Erro de validação");
                }
            }
            catch (_a) {
                return res.status(500).json("error server");
            }
        });
    }
    static home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const parametro = yield req.params.validate;
            const str = yield login_service_1.LoginService.userType(parametro);
            const endereco = "http://localhost:3000/home/" + encodeURIComponent(parametro) + "/" + encodeURIComponent(str);
            console.log(parametro);
            res.status(200).redirect(endereco);
        });
    }
    static userType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send("Hello!");
        });
    }
}
exports.UserLogin = UserLogin;
