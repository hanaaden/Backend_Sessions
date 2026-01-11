import { Router } from "express";

import { getAllgames } from "../controllers/getAllgames";

import { getsinglegame } from "../controllers/getSinglegame";

const router = Router()

router.get("/getsinglegame" , getsinglegame)
router.get("/" , getAllgames);

export default router