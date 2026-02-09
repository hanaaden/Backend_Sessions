import { Request, Response } from "express";
import pool from "../config/db";

export const deletegame = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM tasks WHERE task_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      message: "task deleted successfully",
      deletedId: id,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Database error",
    });
  }
};