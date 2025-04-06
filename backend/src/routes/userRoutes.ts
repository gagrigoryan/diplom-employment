import { Router } from "express";
import passport from "passport";
import { UserController } from "../controllers/userController";

const router = Router();

router.post(
  "/attachWallet",
  passport.authenticate("jwt", { session: false }),
  UserController.attachWallet,
);

export default router;
