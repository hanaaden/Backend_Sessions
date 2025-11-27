import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jwtsupersecretkey"
const JWT_EXPIRES = "1h"

export interface JwtPayloadWithId extends jwt.JwtPayload{
    id : string
}

export const signJwt = (payload:Object)=>{
    return jwt.sign(payload , JWT_SECRET , {expiresIn : JWT_EXPIRES})
}

export const verifyJwt = (token : string): JwtPayloadWithId | null => {
    try{
     const decoded = jwt.verify(token , JWT_SECRET);
     if(typeof decoded === "string") return null
     return decoded as JwtPayloadWithId
    }catch(err){
     console.error("JWT failed" , err)
     return null
    }
}