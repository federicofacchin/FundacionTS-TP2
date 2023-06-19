import {Router} from "express"
const router = Router()
import personRoutes from "./personroutes.js";
import fundationRoutes from "./fundationroutes.js"
import rolroutes from "./rolroutes.js"


router.use("/persons", personRoutes);
router.use("/fundations", fundationRoutes);
router.use("/rols",rolroutes);



export default router;

