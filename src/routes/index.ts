import express from "express";
import adminRoutes from "@routes/admin/index";

const router = express.Router();

router.use("/admin", adminRoutes);
router.get("/check", (req: express.Request, res: express.Response) => {
  res.status(200).send("hello world.");
});

export default router;
