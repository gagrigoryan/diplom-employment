import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { AuthenticatedUser } from "../types/Auth";

type AuthRequest = {
  email: string;
  password: string;
};

export const AuthController = {
  async register(
    req: Request<{}, {}, AuthRequest>,
    res: Response<{ user: AuthenticatedUser }>,
  ) {
    const { email, password } = req.body;
    const user = await AuthService.register(email, password);
    res.json({ user });
  },

  async login(req: Request<{}, {}, AuthRequest>, res: Response) {
    try {
      const { email, password } = req.body;
      const { token } = await AuthService.login(email, password);
      res.json({ token });
    } catch (error: any) {
      res.status(401).json({ message: (error as Error).message });
    }
  },
};
