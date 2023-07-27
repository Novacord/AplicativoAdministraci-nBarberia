import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validacionEntradas} from '../controller/validacionEntradas.js';
import {validate} from 'class-validator';

const middlewareEntradas = express();
middlewareEntradas.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validacionEntradas, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewareEntradas;