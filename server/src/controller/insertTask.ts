import { Request , Response } from "express";

import pool from "../config/db";

export const InsertTask =(async(req : Request , res : Response)=>{

    const {task , description} = req.body;
    try {
        const result = await pool.query(
               `INSERT INTO tasks (task , description)
VALUES('${task}', '${description}')
  RETURNING *`
        )
        res.status(200).json(
            {
                messege : "task added succesfully",
                data : result.rows[0]
            }
        )
    } catch (error) {
        res.status(400).send("bad request")
        console.log(error)
    }
})