import { Request, Response } from "express";
import { contractService } from "../services/contractService";
import type { AuthenticatedRequest } from "../types/Auth";

export const ContractController = {
  async createContract(req: Request, res: Response) {
    try {
      const userId = (req as AuthenticatedRequest)?.user?.id;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const { title, content } = req.body;

      if (!title || !content) {
        res.status(400).json({ message: "Title and content are required" });
      }

      const smartContract = await contractService.deployContract({
        userId,
        content,
      });

      // const contract = await contractService.createContract(userId, { title, content });
      res.status(201).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },

  async getUserContracts(req: Request, res: Response) {
    try {
      const userId = (req as AuthenticatedRequest)?.user?.id;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const contracts = await contractService.getByUser(userId);
      res.json(contracts);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  },
};
