import http from "http";
import url from "url";
import path from "path";
import fs from "fs";
import formidable from "formidable";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname } from "path";

// import { connectToDb } from "./config/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const hbs = require("hbs");

import express from "express";
import hbs from "hbs";
const app = express();
const port = process.env.port || 1000;

// Register the partials directory
hbs.registerPartials(path.join(__dirname, "../frontend/views/partials"));

// Configuring hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../frontend/views"));
app.set("view options", { layout: "layouts/layout.hbs" });

// Middlewares
app.use(express.static("../frontend/public"));
app.use(express.json());

// Import routes
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

// Redirect base request to /user
app.get("/", async (req, res) => {
  res.redirect("/user");
});

// User routes
app.use("/user", userRouter);
app.use("/project", projectRouter);

const startServer = () => {
  try {
    // connectToDb();
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

startServer();
