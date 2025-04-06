import { Request, Response } from "express";
import { UserService } from "../services/userService";
import type { AuthenticatedRequest } from "../types/Auth";
import { ethers } from "ethers";

export const UserController = {
  async attachWallet(req: Request, res: Response) {
    try {
      const userId = (req as AuthenticatedRequest)?.user?.id;
      const { walletAddress, signature, nonce } = req.body;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      if (!walletAddress || !signature) {
        res
          .status(400)
          .json({ error: "walletAddress and signature are required" });
        return;
      }

      const recoveredAddress = ethers.verifyMessage(nonce, signature);

      if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
        res.status(401).json({ error: "Invalid signature" });
        return;
      }

      const updatedUser = await UserService.addWallet(userId, walletAddress);

      res.status(200).json({
        message: "Wallet attached successfully",
        user: updatedUser,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
};
