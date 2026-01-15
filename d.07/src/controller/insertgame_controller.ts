import { Request , Response } from "express"
import pool from "../config/db"

export const insertgame = (async (req:Request , res:Response)=>{
  const {gamename , description} = req.body

  try{
   const result = await pool.query(
      `INSERT INTO games (GameName , description)
VALUES('${gamename}', '${description}')
  RETURNING *`
   )
   res.status(200).json(
    {
        messege : "game successfully added", 
        data : result.rows[0]
    }
   )
   
  }catch(err){
    res.status(400).send("bad request")
  console.log(err)
  }
}
)