import { logger } from "@/utils/logger";
import express from "express";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json("성공");
  } catch (e: any) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});

router.post("/", async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json(req.body);
  } catch (e: any) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});

export default router;
