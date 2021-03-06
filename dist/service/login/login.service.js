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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const validateLogin_operation_1 = require("./validate/validateLogin.operation");
const auth_1 = __importDefault(require("./auth"));
class LoginService {
    static userLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailValid = yield validateLogin_operation_1.validateLogin.getLogin(email);
            const passwordValid = yield validateLogin_operation_1.validateLogin.getPassword(password);
            if (emailValid === true && passwordValid === true) {
                const keyNum = yield (0, auth_1.default)();
                yield validateLogin_operation_1.validateLogin.insertHash(keyNum, email);
                return keyNum;
            }
            else {
                return false;
            }
        });
    }
    static _userLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userLogin(email, password);
            return result;
        });
    }
    static userType(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const usertype = yield validateLogin_operation_1.validateLogin.whatUser(info);
            if (usertype == true) {
                return "BoasVendas";
            }
            else {
                return "BoasCompras";
            }
        });
    }
    static _userType(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userType(info);
            return result;
        });
    }
}
exports.LoginService = LoginService;
