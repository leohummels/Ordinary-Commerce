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
exports.CustumerController = void 0;
const custumer_service_1 = require("../../service/custumer/custumer.service");
const custRepository = custumer_service_1.CustumerService;
class CustumerController {
    getProductByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield custRepository.findById(parseInt(req.params.id));
                res.status(200).send(response);
            }
            catch (_a) {
                res.status(400).send('Algo de errado não está certo certo');
                throw new Error("Check your URL params");
            }
        });
    }
    buyProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { name, price, item_quanti } = yield req.body;
            try {
                const response = yield custRepository.buying(name, price, item_quanti, id);
                return res.status(200).send(req.body);
            }
            catch (erro) {
                res.status(400).send('Algo de errado ao fazer o seu pedido');
            }
        });
    }
}
exports.CustumerController = CustumerController;
