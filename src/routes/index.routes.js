import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.send("Wellcome to my Api"));

export default router;
