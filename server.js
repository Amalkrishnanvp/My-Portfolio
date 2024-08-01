const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;

  const stylePath = path.join("public", "stylesheets", "style.css");
  const scriptPath = path.join("public", "javascripts", "app.js");
  const iconsPath = path.join("public", "icons");
  const imagesPath = path.join("public", "images");

  if (pathName === "/") {
    fs.readFile(path.join("public", "index.html"), (err, data) => {
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
  } else if (pathName === "/public/stylesheets/style.css") {
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
  } else if (pathName === "/public/javascripts/app.js") {
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
  } else if (pathName === "/public/icons/html.png") {
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
  } else if (pathName === "/public/icons/css.png") {
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
  } else if (pathName === "/public/icons/javascript.png") {
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
  } else if (pathName === "/public/icons/tailwind.svg") {
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
  } else if (pathName === "/public/icons/git.png") {
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
  } else if (pathName === "/public/icons/java.png") {
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
  } else if (pathName === "/public/images/img1.png") {
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
  } else if (pathName === "/public/images/img2.png") {
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
  } else if (pathName === "/public/images/img3.png") {
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
    res.end();
  }
});

server.listen(1000, () => {
  console.log("Server is running on port 1000");
});
