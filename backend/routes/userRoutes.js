import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

/* GET - Home page */
router.get("/", userController.getHomePage);

export default router;
