import express from "express";
import bodyParser from "body-parser";
import indexRouteFactory from "./routes/index.route";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRouteFactory(app));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000");
});
