import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello From Summer Home Server!');
    next();
});

export default app;
