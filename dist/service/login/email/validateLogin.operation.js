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
    //static repository: repo = new Repository
    /*static regexp:RegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi

    static async validate(email: string) {
            if(email.match(validateEmail.regexp)) {
                return true
            }  else {
                let result = "Por favor, insira uma e-mail válido."
                return result
            }
    }*/
    static getLogin(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const repoEmail = validateLogin.repo.email;
            if (email = repoEmail) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static getPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const repoPassword = validateLogin.repo.password;
            if (password = repoPassword) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.validateLogin = validateLogin;
validateLogin.repo = {
    "email": "fakemail@fakemail.com",
    "password": "123456789"
};
