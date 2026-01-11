import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

 const pool = new Pool({
    connectionString:connectionString,
});


  const connectToDatabase = async ()=>{
    try {
        const client = await pool.connect();
        console.log('DB is conncted');
        client.release();
    } catch(err){
        console.error("error not conncted to db",err);
    }
};

export {pool , connectToDatabase};