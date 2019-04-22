"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const iocfy_ts_1 = require("iocfy-ts");
let Server = class Server {
    constructor() {
        this.app = new koa_1.default();
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use((ctx) => {
                ctx.body = this.userService.findUserById(1);
            });
            this.app.listen(this.port);
            console.info(`Vipc-Deploy Server listen at ${this.port}`);
        });
    }
};
__decorate([
    iocfy_ts_1.Inject()
], Server.prototype, "userService", void 0);
Server = __decorate([
    iocfy_ts_1.Bean('server', { port: 3000 })
], Server);
exports.default = Server;
