import {Router} from "express"
const router = Router()
import clientRoutes from "./clientroutes.js";

router.use("/clients", clientRoutes);

export default router;

