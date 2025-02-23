"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Victim_1 = require("../controllers/Victim");
var victimRoutes = (0, express_1.default)();
victimRoutes.route("/victim")
    .get(Victim_1.getVictims)
    .post(Victim_1.createVictim);
exports.default = victimRoutes;
