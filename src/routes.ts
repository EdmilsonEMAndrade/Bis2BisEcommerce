import { Router } from 'express';
import universityController from './app/controller/university/university.controller';
const routes = Router();

routes.get("/", (req, res) => {universityController.initializeUniversities(res)})

export default routes;