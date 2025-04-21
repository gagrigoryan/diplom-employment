import { Router } from "express";
import passport from "passport";
import { UserController } from "../controllers/userController";

const router = Router();

router.get(
  "/wallet/nonce",
  passport.authenticate("jwt", { session: false }),
  UserController.getWalletNonce,
);
router.post(
  "/wallet/attach",
  passport.authenticate("jwt", { session: false }),
  UserController.attachWallet,
);

export default router;
