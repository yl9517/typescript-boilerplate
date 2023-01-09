import express from "express";

const router = express.Router();

router.get("/check", (req: express.Request, res: express.Response) => {
  res.status(200).send("hello world.");
});

export default router;
