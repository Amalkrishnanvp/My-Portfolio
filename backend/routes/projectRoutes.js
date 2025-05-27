import express from "express";
const router = express.Router();
import projectController from "../controllers/projectController.js";

/* GET - E-commerce */
router.get("/ecommerce", projectController.getEcommerceDetails);

export default router;
