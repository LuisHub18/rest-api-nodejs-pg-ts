import express from 'express';
import indexRouter from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

