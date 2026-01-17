import express from "express";
import dotenv from "dotenv";

import authRouter from "./src/routes/auth.routes.js";
import connectMongoDB from "./src/db/connect.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

await connectMongoDB(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
