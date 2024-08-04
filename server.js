const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const formidable = require("formidable");
const nodemailer = require("nodemailer");

// creating a server
const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;

  // storing paths in variables for easy accessing
  const stylePath = path.join("public", "stylesheets", "style.css");
  const scriptPath = path.join("public", "javascripts", "app.js");
  const iconsPath = path.join("public", "icons");
  const imagesPath = path.join("public", "images");

  // defining routes
  if (req.method === "GET" && pathName === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
    // route for form submition
  } else if (req.method === "POST" && pathName === "/formaction") {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error parsing form data");
      } else {
        const { name, email, message } = fields;
        const userName = name[0];
        const userEmail = email[0];
        const userMessage = message[0];

        // configure nodemailer
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "yedhuyedhuzzz@gmail.com",
            pass: "yrtm rixv uwgo edqe",
          },
        });

        // defining mailoptions
        const mailOptions = {
          from: userEmail,
          to: "amalyedhu10@gmail.com",
          subject: `Message from ${userName}`,
          text: `You have received a new message from your website contact form.

         Name: ${userName}
         Email: ${userEmail}

         Message: 
         ${userMessage}
         
         Please respond to the sender as soon as possible.

         Message sent on: ${new Date().toLocaleString()}
         
         Thank you,
         Your Website Team`,
        };
        console.log("Sending email...");

        // send email
        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("Can't send mail", error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end();
          } else {
            console.log("Email sent: ", info.response);
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end();
          }
        });
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/stylesheets/style.css"
  ) {
    fs.readFile(stylePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/javascripts/app.js"
  ) {
    fs.readFile(scriptPath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/application" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/icons/html.png") {
    fs.readFile(path.join(iconsPath, "html.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/icons/css.png") {
    fs.readFile(path.join(iconsPath, "css.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/icons/javascript.png"
  ) {
    fs.readFile(path.join(iconsPath, "javascript.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/icons/tailwind.svg"
  ) {
    fs.readFile(path.join(iconsPath, "tailwind.svg"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/icons/git.png") {
    fs.readFile(path.join(iconsPath, "git.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/icons/java.png") {
    fs.readFile(path.join(iconsPath, "java.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/img1.png") {
    fs.readFile(path.join(imagesPath, "img1.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/img2.png") {
    fs.readFile(path.join(imagesPath, "img2.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/img3.png") {
    fs.readFile(path.join(imagesPath, "img3.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found, " + err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (pathName === "/favicon.ico") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(1000, () => {
  console.log("Server is running on port 1000");
});
