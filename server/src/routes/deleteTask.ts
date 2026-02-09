import { Router } from "express";

import { deletegame } from "../controller/deleteTask";
const router = Router()
router.delete("/deleteTask:id" , deletegame)
export default router