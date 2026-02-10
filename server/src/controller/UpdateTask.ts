import { Request , Response } from "express";
import pool from "../config/db";

export const UpdateTask = async(req : Request , res: Response)=>{
   const {id} = req.params
   const {task , description} = req.body
try {
    
   const result = await pool.query(
      `UPDATE tasks
       SET task = $1, description = $2
       WHERE id = $3
       RETURNING *`,
      [task, description, id]
    );

   res.status(200).json({messege : "updated succesfully"})
} catch (error) {
    res.status(400).json({messege : "error happenned"})
}

}