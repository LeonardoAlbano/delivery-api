import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import { routes } from './routes';
import { errorHandling } from './middleware/error-handling';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  })
);

app.use(express.json());
app.use(routes);
app.use(errorHandling);

export { app };