import { Router } from "express";
import passport from "passport";
import { ContractController } from "../controllers/contractController";

const router = Router();

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  ContractController.createContract,
);
router.get(
  "/contracts",
  passport.authenticate("jwt", { session: false }),
  ContractController.getUserContracts,
);

export default router;
