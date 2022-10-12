import { Router } from 'express';
import universityController from './app/controller/university/university.controller';
const routes = Router();

routes.get("/universities/:id", (req, res) => {universityController.findById(req, res)})
routes.get("/created", (req, res) => {universityController.initializeUniversities(res)})

export default routes;