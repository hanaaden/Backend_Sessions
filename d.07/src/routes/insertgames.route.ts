import { Router } from "express";
import { insertgame } from "../controller/insertgame_controller";


const router = Router()

router.post('/insert' , insertgame)

export default router