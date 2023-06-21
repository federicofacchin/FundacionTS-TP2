import {Router} from "express"
const router = Router()
import personRoutes from "./personroutes.js";
import fundationRoutes from "./fundationroutes.js"
import rolroutes from "./rolroutes.js"
import donationRoutes from "./donationroutes.js";

router.use("/persons", personRoutes);
router.use("/fundations", fundationRoutes);
router.use("/rols",rolroutes);
router.use("/donation",donationRoutes);


export default router;

