import connectDB from './config/db';
import router from './config/router';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

connectDB();

dotenv.config();

const app = express();

app.use('/api', router);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

const secret = process.env['SECRET'] || 'ugly space wizard donkey';
const port = process.env['PORT'] || 8000;

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is running in ${process.env['NODE_ENV']} mode on port ${port}`);
});