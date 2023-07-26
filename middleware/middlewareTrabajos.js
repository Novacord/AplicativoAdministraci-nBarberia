import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validaciontrabajo} from '../controller/validaciontrabajo.js';
import {validate} from 'class-validator';

const middlewareTrabajos = express();
middlewareTrabajos.use(async(req,res,next)=>{
    try {
        let data = plainToClass(validaciontrabajo, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default middlewareTrabajos;