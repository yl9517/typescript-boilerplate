import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import indexRoutes from "@routes/index";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import swaggerConfig from "@configs/openapi.json";

const app = express();
const PORT = 8080;

const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use(bodyParser.json());

app.use(indexRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World~! It's version port : ${PORT}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
