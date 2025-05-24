// const http = require("http");
// const url = require("url");
// const path = require("path");
// const fs = require("fs");
// const formidable = require("formidable");
// const nodemailer = require("nodemailer");

import http from "http";
import url from "url";
import path from "path";
import fs from "fs";
import formidable from "formidable";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const express = require("express");

// const hbs = require("hbs");

import express from "express";
import hbs from "hbs";
const app = express();
const port = process.env.port || 1000;

// Configuring hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("view options", { layout: "layouts/layout.hbs" });

// Middlewares
app.use(express.static("public"));
app.use(express.json());

// Import routes
import userRouter from "./routes/userRoutes.js";

// Redirect base request to /user
app.get("/", async (req, res) => {
  res.redirect("/user");
});

// User routes
app.use("/user", userRouter);

// creating a server
// const server = http.createServer((req, res) => {
//   const pathName = url.parse(req.url).pathname;

//   // storing paths in variables for easy accessing
//   const stylePath = path.join("public", "stylesheets", "style.css");
//   const scriptPath = path.join("public", "javascripts", "app.js");
//   const iconsPath = path.join("public", "icons");
//   const imagesPath = path.join("public", "images");

//   // defining routes
//   if (req.method === "GET" && pathName === "/") {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//     // route for form submition
//   } else if (req.method === "POST" && pathName === "/formaction") {
//     const form = new formidable.IncomingForm();
//     form.parse(req, (err, fields) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Error parsing form data");
//       } else {
//         const { name, email, message } = fields;
//         const userName = name[0];
//         const userEmail = email[0];
//         const userMessage = message[0];

//         // configure nodemailer
//         const transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: "yedhuyedhuzzz@gmail.com",
//             pass: "yrtm rixv uwgo edqe",
//           },
//         });

//         // defining mailoptions
//         const mailOptions = {
//           from: userEmail,
//           to: "amalyedhu10@gmail.com",
//           subject: `Message from ${userName}`,
//           text: `You have received a new message from your website contact form.

//          Name: ${userName}
//          Email: ${userEmail}

//          Message:
//          ${userMessage}

//          Please respond to the sender as soon as possible.

//          Message sent on: ${new Date().toLocaleString()}

//          Thank you,
//          Your Website Team`,
//         };
//         console.log("Sending email...");

//         // send email
//         transport.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log("Can't send mail", error);
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end();
//           } else {
//             console.log("Email sent: ", info.response);
//             res.writeHead(200, { "Content-Type": "text/plain" });
//             res.end();
//           }
//         });
//       }
//     });
//   } else if (
//     req.method === "GET" &&
//     pathName === "/public/stylesheets/style.css"
//   ) {
//     fs.readFile(stylePath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (
//     req.method === "GET" &&
//     pathName === "/public/javascripts/app.js"
//   ) {
//     fs.readFile(scriptPath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "text/application" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/html.png") {
//     fs.readFile(path.join(iconsPath, "html.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/css.png") {
//     fs.readFile(path.join(iconsPath, "css.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (
//     req.method === "GET" &&
//     pathName === "/public/icons/javascript.png"
//   ) {
//     fs.readFile(path.join(iconsPath, "javascript.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (
//     req.method === "GET" &&
//     pathName === "/public/icons/tailwind.svg"
//   ) {
//     fs.readFile(path.join(iconsPath, "tailwind.svg"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/svg+xml" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/git.png") {
//     fs.readFile(path.join(iconsPath, "git.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/java.png") {
//     fs.readFile(path.join(iconsPath, "java.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/node.jpg") {
//     fs.readFile(path.join(iconsPath, "node.jpg"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/icons/express.png") {
//     fs.readFile(path.join(iconsPath, "express.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (
//     req.method === "GET" &&
//     pathName === "/public/icons/handlebars.png"
//   ) {
//     fs.readFile(path.join(iconsPath, "handlebars.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/me.jpg") {
//     fs.readFile(path.join(imagesPath, "me.jpg"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/me.jpg") {
//     fs.readFile(path.join(imagesPath, "me.jpg"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/amal1.jpg") {
//     fs.readFile(path.join(imagesPath, "amal1.jpg"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img1.png") {
//     fs.readFile(path.join(imagesPath, "img1.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img2.png") {
//     fs.readFile(path.join(imagesPath, "img2.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img3.png") {
//     fs.readFile(path.join(imagesPath, "img3.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img4.png") {
//     fs.readFile(path.join(imagesPath, "img4.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img5.png") {
//     fs.readFile(path.join(imagesPath, "img5.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img6.png") {
//     fs.readFile(path.join(imagesPath, "img6.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img7.png") {
//     fs.readFile(path.join(imagesPath, "img7.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img8.png") {
//     fs.readFile(path.join(imagesPath, "img8.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (req.method === "GET" && pathName === "/public/images/img9.png") {
//     fs.readFile(path.join(imagesPath, "img9.png"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Error found, " + err);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (pathName === "/favicon.ico") {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end();
//   } else {
//     res.writeHead(400, { "Content-Type": "text/plain" });
//     res.end("Not found");
//   }
// });

const startServer = () => {
  try {
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

startServer();
