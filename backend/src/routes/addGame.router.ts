import { Router } from "express";
import { addnewGame } from "../controllers/addGame.controller";

const router = Router();

router.post("/addgame",addnewGame);

export default router;