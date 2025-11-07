import express from "express";
import cors from "cors";
import ageMiddleWare from "./middlewares/checkAge"
import getAccessofAdult from "./controllers/ageController";

const app = express();


app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.post("/auth" , ageMiddleWare, getAccessofAdult)
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
