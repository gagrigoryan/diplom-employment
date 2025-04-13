import crypto from "crypto";
import { prisma } from "../lib/prisma";
import { ethers } from "ethers";

import EmploymentContractArtifacts from "../../../smart-contracts/artifacts/contracts/EmploymentContract.sol/EmploymentContract.json";
import type { EmploymentContract } from "../../../smart-contracts/typechain-types";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(
  "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
  provider,
);

export const contractService = {
  async createContract(
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

  async deployContract({ userId }: { userId: number }) {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.walletAddress) {
      throw new Error("Invalid user");
    }

    const factory = new ethers.ContractFactory(
      EmploymentContractArtifacts.abi,
      EmploymentContractArtifacts.bytecode,
      wallet,
    );

    const startDate = 1622505600; // Время начала (например, в формате Unix timestamp)
    const endDate = 1654041600; // Время окончания
    const salaryPerMonth = 3000;
    const totalSickDays = 12;

    const contract = await factory.deploy(
      wallet,
      user.walletAddress,
      startDate,
      endDate,
      salaryPerMonth,
      totalSickDays,
    );
    await contract.waitForDeployment();

    return contract as EmploymentContract;
  },

  async getByUser(userId: number) {
    return prisma.contract.findMany({ where: { userId } });
  },
};
