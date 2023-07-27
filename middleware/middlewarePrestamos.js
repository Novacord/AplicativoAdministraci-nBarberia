import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validacionPrestamos} from '../controller/validacionPrestamos.js';
import {validate} from 'class-validator';

const middlewarePrestamos = express();
middlewarePrestamos.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validacionPrestamos, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewarePrestamos;