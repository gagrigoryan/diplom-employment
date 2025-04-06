import { User } from "@prisma/client";
import { Request } from "express";

export interface AuthenticatedUser extends Pick<User, "id" | "email"> {} // Берём только нужные поля

export interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}
