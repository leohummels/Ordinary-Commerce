"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.quantiUpdate = void 0;
function quantiUpdate(resultRow) {
    resultRow[0].quanti = resultRow[0].quanti - 1;
    return resultRow[0];
}
exports.quantiUpdate = quantiUpdate;
function result(id, repository) {
    return repository.findById(id);
}
exports.result = result;
