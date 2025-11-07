import { Request , Response , NextFunction } from "express";
function checkAge(req: Request , res : Response , next : NextFunction){
    const {age} = req.body;
    if(!age){
        return res.status(400).send({
            msg:"Age is required"
        })
    }
    if(age < 10){
        return res.status(403).send({
            msg : "you are too younger"
        })
    }
    next()
}

export default checkAge