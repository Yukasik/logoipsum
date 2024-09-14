const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use((request, _, next) => {
    console.log(`Запрос получен: ${request.method} ${request.path}`);
    next();
  });

  app.get("/", (req, res) => {
    return nextApp.render(req, res, "/", req.query);
  });

  app.get("/property", (req, res) => {
    return nextApp.render(req, res, "/property", req.query);
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Сервер запущен на порту 3000");
  });
});
