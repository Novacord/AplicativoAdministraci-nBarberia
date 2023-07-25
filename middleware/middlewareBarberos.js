import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validacionBarberos} from '../controller/validacionBarberos.js';
import {validate} from 'class-validator';

const middlewareBarberos = express();
middlewareBarberos.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validacionBarberos, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewareBarberos;