import { Router, response } from "express";
const rolRoutes = Router();

import RolController from "../Controllers/rolController.js"
const rolController = new RolController()

rolRoutes.get("/",rolController.getAllRols);
rolRoutes.get("/:id",rolController.getRolById);

export default rolRoutes;