import {Router} from "express"
const router = Router()
import personRoutes from "./personroutes.js";
import fundationRoutes from "./fundationroutes.js"

router.use("/persons", personRoutes);
router.use("/fundations", fundationRoutes);

export default router;

