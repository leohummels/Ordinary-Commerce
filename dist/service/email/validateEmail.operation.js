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
exports.validateEmail = void 0;
const repository_1 = require("../repository");
class validateEmail {
    static validate(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (email.match(validateEmail.regexp)) {
                return true;
            }
            else {
                let result = "Por favor, insira uma e-mail válido.";
                return result;
            }
        });
    }
    static getEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const repoEmail = "";
        });
    }
}
exports.validateEmail = validateEmail;
validateEmail.repository = new repository_1.Repository;
validateEmail.regexp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi;
