
import express, { NextFunction,Request, Response } from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';


const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to auth Service")
})

app.use((err:HttpError,req:Request,res:Response,next:NextFunction)=>{
  
        logger.error(err.message);
        const statusCode = err.statusCode || 500
        res.status(statusCode).json({

            errors:[
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: ''
            }
            ]
        })
    }
)

export default app;