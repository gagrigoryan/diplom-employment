import { Request, Response } from "express";
import { UserService } from "../services/userService";
import type { AuthenticatedRequest } from "../types/Auth";
import { ethers } from "ethers";
import { randomUUID } from "crypto";

export const UserController = {
  async getWalletNonce(req: Request, res: Response) {
    const userId = (req as AuthenticatedRequest)?.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    if (req.session.nonce) {
      res.status(200).json({
        nonce: req.session.nonce,
      });
      return;
    }

    const nonce = randomUUID();

    req.session.nonce = nonce as string;
    req.session.userId = userId;

    res.status(200).json({
      nonce,
    });
  },

  async attachWallet(req: Request, res: Response) {
    try {
      const userId = (req as AuthenticatedRequest)?.user?.id;
      const { walletAddress, signature, nonce } = req.body;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      if (!req.session) {
        return res.status(400).json({ error: "Session expired" });
      }

      if (userId !== req.session.userId) {
        return res
          .status(403)
          .json({ error: "Wallet doesn't match session user" });
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
