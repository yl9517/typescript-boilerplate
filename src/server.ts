import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import indexRoutes from "@routes/index";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(indexRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World~! It's version port : ${PORT}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
