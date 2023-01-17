import express from "express";
import adminRoutes from "@routes/admin/index";

const router = express.Router();

router.use("/admin", adminRoutes);

/**
 *  @swagger
 *  /check:
 *    get:
 *      tags: ["Test"]
 *      summary: Server health check.
 *      description: Testing whether the server instance is alive.
 *      responses:
 *        200:
 *          description: Returns hello world.
 *          content:
 *            application/json:
 *              schema:
 *              type: string
 *              example: hello world.
 */
router.get("/check", (req: express.Request, res: express.Response) => {
  res.status(200).send("hello world.");
});

export default router;
