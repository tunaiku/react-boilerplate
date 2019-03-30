// import server dependencies

const express = require("express");
const compression = require("compression");
const path = require("path");
const loadable = require("react-loadable");
const cookieParser = require("cookie-parser");
const mobileDetect = require("mobile-detect");

// compile our react and esnext code
require("./bootstrapper.js");

// Our loader - this basically acts as the entry point for each page load
const loader = require("./loader.js");

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3001;
const prodEnv = "production";

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set default header
app.use((req, res, next) => {
  res.header("Access-Control-Max-Age", "3600");
  res.header("Cache-Control", "public, max-age=2592000");
  res.header("Expires", new Date(Date.now() + 2592000000).toUTCString());

  return next();
});

// serve new generation images
if (process.env.NODE_ENV === prodEnv) {
  app.get(["*.jpg", "*.jpeg", "*.png"], (req, res, next) => {
    const mb = new mobileDetect(req.headers["user-agent"]);
    const browser = mb.userAgent();
    if (browser === "Chrome" || browser === "Opera") {
      const newImgUrl = req.url.replace(/\.(jpg|jpeg|png)\b/, ".webp");
      req.url = newImgUrl;
      res.set("Content-Type", "image/webp");
    }
    next();
  });
}

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get("/", loader));
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle the bugs somehow
app.on("error", error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
