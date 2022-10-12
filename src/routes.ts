import { Router } from 'express';
import universityController from './app/controller/university/university.controller';
const routes = Router();

routes.post("/created", (req, res) => {universityController.initializeUniversities(res)});
routes.post("/universities", (req, res) => {universityController.createUniversity(req, res)});
routes.get("/universities", (req, res) => {universityController.findAllUniversities(req, res)});
routes.get("/universities/:id", (req, res) => {universityController.findById(req, res)});


export default routes;