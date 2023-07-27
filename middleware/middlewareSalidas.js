import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validacionSalidas} from '../controller/validacionSalidas.js';
import {validate} from 'class-validator';

const middlewareSalidas = express();
middlewareSalidas.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validacionSalidas, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewareSalidas;