import { Router } from "express";
import passport from "passport";
import { ContractController } from "../controllers/contractController";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ContractController.createContract,
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  ContractController.getUserContracts,
);

export default router;
