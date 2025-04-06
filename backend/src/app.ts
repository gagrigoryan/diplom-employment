import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import "./config/passport";
import authRoutes from "./routes/authRoutes";
import contractRoutes from "./routes/contractRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/contracts", contractRoutes);
app.use("/user", userRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  },
);

export default app;
