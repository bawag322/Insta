"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./database"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var Victim_1 = __importDefault(require("./routes/Victim"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", Victim_1.default);
app.listen(PORT, function () { return console.warn("[Server] started at port: " + PORT); });
(0, database_1.default)();
