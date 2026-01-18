import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./src/routes/auth.routes.js";
import dashboardRouter from "./src/routes/dashboard.routes.js";
import connectMongoDB from "./src/db/connect.js";
import { verifyAccessToken } from "./src/middlewares/auth.middlewares.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

await connectMongoDB(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.send("hello from server");
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/dashboard", verifyAccessToken, dashboardRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
