import { Router } from 'express';
import universityController from './app/controller/university/university.controller';
const routes = Router();

routes.post("/created", (req, res) => {universityController.initializeUniversities(res)});
routes.post("/universities", (req, res) => {universityController.createUniversity(req, res)});
routes.get("/universities", (req, res) => {universityController.findAllUniversities(req, res)});
routes.get("/universities/:id", (req, res) => {universityController.findById(req, res)});
routes.put("/universities/:id", (req, res) => {universityController.update(req, res)});
routes.delete("/universities/:id", (req, res) => {universityController.deleteByID(req, res)});


export default routes;