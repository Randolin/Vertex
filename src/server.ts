import connectDB from './config/db.js';
import router from './routes/router.js';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

connectDB();

dotenv.config();

const app = express();

app.use('/api', router);
app.use(express.static(path.join(__dirname, 'client', 'build')));

const secret = process.env.SECRET || 'ugly space wizard donkey';
const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client/', 'build/', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
