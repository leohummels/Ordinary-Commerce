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
exports.Service = void 0;
class Service {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    create(name, price, quanti) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.insertOneProduct(name, price, quanti);
            return response;
        });
    }
    findAll(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.getList(list);
            return response;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.getById(id);
            return response;
        });
    }
    putById(name, price, quanti, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.updateById(name, price, quanti, id);
            return response;
        });
    }
    DeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.repository.Delete(id);
            return response;
        });
    }
}
exports.Service = Service;
