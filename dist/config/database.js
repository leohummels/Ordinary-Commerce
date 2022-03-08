"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pgp = require('pg-promise')();
//const db = pgp('connection')
//import dotenv from 'dotenv/config'
dotenv_1.default.config();
exports.pool = pgp({
    connectionString: process.env.DATA_URL
});
/*pool.query("SELECT * FROM products",  (err, res) => {
    console.log(err, res);
    pool.end();
})*/ 
