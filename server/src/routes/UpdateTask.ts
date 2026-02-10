import { Router } from "express";
import { UpdateTask } from "../controller/UpdateTask";

const router = Router()

router.put("/updateTask" , UpdateTask)

export default router