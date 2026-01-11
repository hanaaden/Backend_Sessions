import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

pool
  .query("SELECT 1")
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB connection error", err));


export default pool;


