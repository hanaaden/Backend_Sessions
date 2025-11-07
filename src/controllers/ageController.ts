import { Request , Response } from "express";

function getAccessofAdult(req :Request , res:Response){
    res.status(200).send({
        msg: "welcome to adult we you start messing everything"
    })
}
export default getAccessofAdult