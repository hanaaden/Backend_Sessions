import {Router} from "express"
import { getAllTAsk } from "../controller/getAllTask"

const router = Router()
router.get("/getAllTask" , getAllTAsk )
export default router

