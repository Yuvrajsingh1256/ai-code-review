import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";


const app = express();

app.use(cors({origin: "*"}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ai", aiRoutes);

export default app;
