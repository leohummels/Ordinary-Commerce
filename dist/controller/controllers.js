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
exports.putProduct = exports.getProductByID = exports.getAll = exports.insertOne = void 0;
const database_1 = require("../config/database");
//Parei aqui!
const insertOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, quanti } = req.body;
    const response = yield database_1.pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)', [name, price, quanti], (err, respon) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            res.send(respon.rows[0]);
        }
    });
    return response;
    //res.json(req.body)
});
exports.insertOne = insertOne;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const id = Number(req.params.id)
    const response = yield database_1.pool.query('SELECT * FROM products ORDER BY name ASC', (err, respon) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            console.log(respon.rows);
            res.send(respon.rows);
        }
    });
    return response;
});
exports.getAll = getAll;
const getProductByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM products WHERE id = $1', [id], (err, respon) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            console.log(respon.rows);
            res.send(respon.rows);
        }
    });
    return response;
});
exports.getProductByID = getProductByID;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { name, price, quanti } = req.body;
    const response = yield database_1.pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id] /*, (err:Error, respon: QueryResult) => {
        if(err) {
            console.log(err.stack)
        } else {
           console.log(respon.rows[0])
           res.send(respon.rows[0])
        }}*/);
    return res.status(200).send(req.body);
});
exports.putProduct = putProduct;
//export default Controller
