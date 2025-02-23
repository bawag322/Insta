"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var VictimSchema = new mongoose_1.default.Schema({
    username: String,
    password: String
}, { timestamps: true });
var Victims = mongoose_1.default.model("Victims", VictimSchema);
exports.default = Victims;
