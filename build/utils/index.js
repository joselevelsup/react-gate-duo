"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomId = void 0;
exports.randomId = function (length) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randS = "";
    while (length > 0) {
        randS += chars.charAt(Math.floor(Math.random() * chars.length));
        length--;
    }
    return randS;
};
