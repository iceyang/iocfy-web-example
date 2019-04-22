"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iocfy_ts_1 = __importDefault(require("iocfy-ts"));
iocfy_ts_1.default.scan(__dirname);
iocfy_ts_1.default.init();
const server = iocfy_ts_1.default.get('server');
server.run().then(() => {
    console.info('server is running now.');
});
