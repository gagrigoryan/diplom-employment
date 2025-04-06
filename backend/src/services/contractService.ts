import crypto from "crypto";
import { prisma } from "../lib/prisma";

export const contractService = {
  async create(
    userId: number,
    { title, content }: { title: string; content: string },
  ) {
    const encryptedContent = crypto
      .createHash("sha256")
      .update(content)
      .digest("hex");

    return prisma.contract.create({
      data: { userId, title, content, encryptedContent },
    });
  },

  async getByUser(userId: number) {
    return prisma.contract.findMany({ where: { userId } });
  },
};
