"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomKey() {
    const key = [];
    for (let i = 0; i < 16; i++) {
        let num = Math.floor(Math.random() * (9));
        key.push(num);
    }
    return key.join("");
}
exports.default = randomKey;
