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
exports.validateLogin = void 0;
class validateLogin {
    static getLogin(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const consult = yield validateLogin
                .repo
                .find(element => { return element.email === email; });
            if (consult.email === email) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static getPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const consult = yield validateLogin
                .repo
                .find(element => { return element.password === password; });
            if (consult.password === password) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static insertHash(key, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const consult = yield validateLogin
                .repo
                .find(element => {
                if (element.email === email) {
                    element.hash = key;
                    return element.hash;
                }
            });
            return consult;
        });
    }
    ;
    static whatUser(info) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consult = yield validateLogin
                    .repo
                    .find(element => {
                    if (element.hash === info) {
                        return element;
                    }
                });
                return consult.costumer;
            }
            catch (_a) {
                return false;
            }
        });
    }
}
exports.validateLogin = validateLogin;
validateLogin.repo = [
    {
        "email": "fakemail@fakemail.com",
        "password": "123456789",
        "costumer": true,
        "hash": "",
    },
    {
        "email": "other_fakemail@fakemail.com",
        "password": "987654321",
        "costumer": false,
        "hash": ""
    }
];
