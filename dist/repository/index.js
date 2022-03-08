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
exports.Repository = void 0;
const database_1 = require("../config/database");
class Repository {
    constructor() {
        this.productCollection = null;
        this.productObject = null;
    }
    insertOneProduct(name, price, quanti) {
        return __awaiter(this, void 0, void 0, function* () {
            this.productObject = { name: name, price: price, quanti: quanti };
            yield database_1.pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)', [name, price, quanti])
                .then(() => { return this.productObject; }).catch(404);
            return this.productObject;
        });
    }
    getList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.pool.query('SELECT * FROM $1:name ORDER BY id', [list]);
            return response;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.pool.query('SELECT * FROM products WHERE id = $1', [id]);
            return response;
        });
    }
}
exports.Repository = Repository;
