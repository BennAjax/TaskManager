import express from "express";
import routes from "./routes";
const app = express();
const port = 3000;

routes(app);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`MEVN app listening at http://localhost:${port}`)
);
