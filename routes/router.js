import {Router} from "express"
const router = Router()
import clientRoutes from "./clientroutes.js";
import fundationRoutes from "./fundationroutes.js"

router.use("/clients", clientRoutes);
router.use("/fundations", fundationRoutes);

export default router;

