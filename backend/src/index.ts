import connectDB from './config/db';
import router from './api/router';
import path from 'path';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getBackendConfig } from './controllers/config';

export let config: any = null;

dotenv.config();

connectDB().then(() => {
  const app = express();

  app.use('/api', router);
  app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist', 'browser')));

  const port = process.env['PORT'] || 8000;

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'dist', 'browser', 'index.html'));
  });

  app.listen(port, () => {
    console.log(`App is running in ${process.env['NODE_ENV']} mode on port ${port}`);
  });

  getBackendConfig().then((c) => {
    if (!c) {
      console.error('Backend config not found!');
    }

    config = c;
  });
});