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
exports.BuyerController = void 0;
const repository_1 = require("../repository");
const service_1 = require("../service/service");
const repo = new repository_1.Repository;
const repository = new service_1.Service(repo);
class BuyerController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield repository.findAll(req.params.list);
                res.status(200).send(response);
            }
            catch (_a) {
                res.status(400).send('Algo de errado não está certo');
                throw new Error("Check your URL");
            }
        });
    }
}
exports.BuyerController = BuyerController;
