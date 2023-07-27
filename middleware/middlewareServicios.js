import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validacionServicios} from '../controller/validacionServicios.js';
import {validate} from 'class-validator';

const middlewareServicios = express();
middlewareServicios.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validacionServicios, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewareServicios;