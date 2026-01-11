import { Request , Response } from "express";


export const getsinglegame = (req:Request , res : Response)=>{

    const {id} = req.params;

   const books = [
    {
      id: 1,
      author: "Kranthi Banda",
      hanaaden: "Harry Potter and the Chamber of Secrets",
    },
    { id: 2, author: "George Orwell", hanaaden: "Animal Farm" },
    { id: 3, author: "J.R.R. Tolkien", hanaaden: "The Hobbit" },
    { id: 4, author: "Paulo Coelho", hanaaden: "The Alchemist" },
    { id: 5, author: "Chetan Bhagat", hanaaden: "Half Girlfriend" },
    { id: 6, author: "Dan Brown", hanaaden: "Angels & Demons" },
    { id: 7, author: "Agatha Christie", hanaaden: "And Then There Were None" },
    { id: 8, author: "F. Scott Fitzgerald", hanaaden: "The Great Gatsby" },
    { id: 9, author: "Suzanne Collins", hanaaden: "The Hunger Games" },
    { id: 10, author: "Harper Lee", hanaaden: "To Kill a Mockingbird" },
    { id: 11, author: "AAAAAAAAA", hanaaden: "AAAA" },
  ];



const game = games.find((b) => b.id === parseInt(id));

if(!game){
    res.status(404).send("game not found")
}

res.send({game})
}