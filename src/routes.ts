import { Router } from 'express';
import universityController from './app/controller/university.controller';
const routes = Router();

routes.get("/", (req, res) => {universityController.inicializeUniversity(res)})

export default routes;