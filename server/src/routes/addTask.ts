import { Router } from "express";
import {InsertTask} from "../controller/insertTask"
const router = Router()
router.post("/insertTask" , InsertTask)
export default router