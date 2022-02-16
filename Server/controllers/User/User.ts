import express, { Request, Response } from 'express';
import { CrudController } from '../CrudController';
const db = require ('../../models/model')


interface AlgoList {
   name: string;
//   description: string;
//   number: number;
//   example_1: string;
//   example_2: string;
//   difficulty: string;
//   pattern: string;
 }

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response, next:express.NextFunction): Promise<void>   {
            console.log('in user controller')
            const qAlgos  = 'SELECT * FROM "public"."public.algo-questions" LIMIT 100';
            const homeQuery = await db.query(qAlgos);
            const details = homeQuery.rows;
            // console.log(details);
            res.locals = details ;
            return next()
            
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}