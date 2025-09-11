import express from "express";
const router = express.Router();
import projectController from "../controllers/projectController.js";

/* GET - E-commerce */
router.get("/ecommerce", projectController.getEcommerceDetails);
/* GET - Movie search */
router.get("/movie-search", projectController.getMovieSearchDetails);
/* GET - Mdplanner */
router.get("/mdPlanner", projectController.getMdplannerDetails);

export default router;
