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
exports.Controller = void 0;
const repository_1 = require("../repository");
const service_1 = require("../service/service");
const repo = new repository_1.Repository;
const repository = new service_1.Service(repo);
class Controller {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield repository.findAll(req.params.list);
                res.status(200).send(response);
            }
            catch (erro) {
                res.status(400).send('Algo de errado não está certo');
                this.error;
            }
        });
    }
    getProductByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield repository.findById(parseInt(req.params.id));
            res.status(200).send(response);
        });
    }
    insertOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, quanti } = req.body;
            const response = yield repository.create(name, price, quanti);
            res.send(response);
        });
    }
    putProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { name, price, quanti } = req.body;
            const response = yield repository.putById(name, price, quanti, id);
            return res.status(200).send(req.body);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const response = yield repository.deleteById(id);
            return res.status(200).send('Produto deletado com Sucesso!');
        });
    }
    error() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error;
        });
    }
}
exports.Controller = Controller;
