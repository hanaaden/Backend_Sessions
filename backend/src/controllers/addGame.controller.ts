import { Request , Response } from "express";
import pool from "../config/db";

export const addnewGame = (async (req: Request , res: Response)=>{
    const {title,description,developer,platform} = req.body;

    try {
        const result = await pool.query(
          `INSERT into gamesss (title,description,developer,platform)
VALUES('${title}', '${description}', '${developer}', '${platform}')
  RETURNING *`
        ); ;

           res.status(201).json({
             message: "Game added successfully",
             data: result.rows[0],
           });
    } catch (error) {
        console.error(error);
    }

    // TRUNCATE TABLE gamess RESTART IDENTITY CASCADE

    finally{
        res.send({
            "query":"sucessfully"
        })
    }
//                 `INSERT into gamesss (title,description,developer,platform)
// VALUES('gta v','5 star rater','hanaaden','console')

});