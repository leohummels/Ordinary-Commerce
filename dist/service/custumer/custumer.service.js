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
exports.CustumerService = void 0;
const repository_1 = require("../../repository");
const buy_operation_1 = require("./buy/buy.operation");
class CustumerService {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    static create(name, price, quanti) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.insertOneProduct(name, price, quanti);
            return response;
        });
    }
    static findAll(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.getList(list);
            return response;
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.getById(id);
            return response;
        });
    }
    static buying(name, price, item_quanti, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let put_quanti = yield (0, buy_operation_1.buyOperation)(id, item_quanti);
            const response = yield this.repository.updateById(name, price, put_quanti, id);
            return response;
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.Delete(id);
            return response;
        });
    }
}
exports.CustumerService = CustumerService;
CustumerService.repository = new repository_1.Repository;
