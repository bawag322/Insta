import express, { Express } from "express";
import { getVictims, createVictim } from "../controllers/Victim";

const victimRoutes: Express = express();

victimRoutes.route("/victim")
    .get(getVictims)
    .post(createVictim);

export default victimRoutes;