import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import session from "express-session";
import { RedisStore } from "connect-redis";
import { redisClient } from "./lib/redis";
import "./config/passport";
import authRoutes from "./routes/authRoutes";
import contractRoutes from "./routes/contractRoutes";
import userRoutes from "./routes/userRoutes";

// 10 минут
const SESSION_MAX_AGE = 1000 * 60 * 10;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: SESSION_MAX_AGE,
      httpOnly: true,
      secure: false,
    },
  }),
);

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
