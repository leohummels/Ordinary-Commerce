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
exports.getOne_Kart = void 0;
const database_1 = require("../config/database");
//Parei aqui!
const getOne_Kart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let selectProd;
    const id = Number(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM products WHERE id = $1', [id], (err, respon) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            selectProd = respon.rows[0];
            selectProd.quanti = selectProd.quanti - 1;
            //Update da quantidade de itens no DB
            const { quanti } = selectProd;
            const treatment = database_1.pool.query('UPDATE products SET quanti = $1 WHERE id = $2', [quanti, id]);
            res.send(respon.rows);
        }
    });
});
exports.getOne_Kart = getOne_Kart;
