import { Request , Response } from "express"

export const getAllgames = (req : Request , res : Response)=>{
    res.send( {
       
games: [
  {
    title: "GTA V",
    platform: "PC / Console",
  },
  {
    title: "Minecraft",
    platform: "PC / Mobile / Console",
  },
  {
    title: "Valorant",
    platform: "PC",
  },
  {
    title: "PUBG Mobile",
    platform: "Mobile",
  },
  {
    title: "Call of Duty Warzone",
    platform: "PC / Console",
  },
  {
    title: "Free Fire",
    platform: "Mobile",
  },
  {
    title: "Fortnite",
    platform: "PC / Mobile / Console",
  },
  {
    title: "God of War",
    platform: "Console",
  },
  {
    title: "Among Us",
    platform: "Mobile / PC",
  },
  {
    title: "Subway Surfers",
    platform: "Mobile",
  },
],

        }
    )
}
    
