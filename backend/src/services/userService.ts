import { prisma } from "../lib/prisma";

export const UserService = {
  async addWallet(userId: number, walletAddress: string) {
    const existingUserWithWallet = await prisma.user.findUnique({
      where: { walletAddress },
    });

    if (existingUserWithWallet && existingUserWithWallet.id === userId) {
      throw new Error("This wallet is already associated.");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        walletAddress,
      },
      select: { id: true, email: true, walletAddress: true },
    });

    return updatedUser;
  },
};
