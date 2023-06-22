import { Router, response } from "express";
const donationRoutes = Router();

import DonationController from "../Controllers/donationController.js";

const donationController = new DonationController();

donationRoutes.get("/",donationController.getAllDonations);
donationRoutes.get("/:id",donationController.getDonationById);
donationRoutes.post("/",donationController.createDonation);




export default donationRoutes;