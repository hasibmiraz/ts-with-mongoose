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
const app_1 = require("./app");
const dbconnect_1 = require("./app/utils/dbconnect");
const logger_1 = require("./app/utils/logger");
const { PORT } = process.env;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app_1.app.listen(PORT, () => logger_1.log.info(`Starting server on port ${PORT}`));
        (0, dbconnect_1.dbConnect)();
    }
    catch (error) {
        logger_1.log.error(error.message);
    }
});
startServer();
