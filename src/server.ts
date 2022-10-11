import express from 'express'
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
require('./app/config/mongo');
dotenv.config()

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));