import { Router } from "express";
import { deletegame } from "../controller/deletegame.controller";

const router = Router();

router.delete('/deletegame/:id', deletegame);

export default router;
