import { Request ,Response } from "express";
import pool from "../config/db";

export const getAllTAsk= async( req : Request , res : Response)=>{
try {
   const result=   pool.query(
     `SELECT * FROM tasks`
  )
  res.status(200).send(result)

} catch (error) {
    console.log(error)
}
 

}