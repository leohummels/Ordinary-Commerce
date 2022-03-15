"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const db = (0, pg_promise_1.default)();
dotenv_1.default.config();
exports.pool = db({
    connectionString: process.env.DATA_URL
});
