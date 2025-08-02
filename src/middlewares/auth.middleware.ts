import { Request, Response, NextFunction } from "express";
import { AppDataSource } from '../db/data-source.db';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../entities/user.entity";
import { ErrorResult } from "../core/error.core";
import { appConfigs } from "../configs";
import { MessageCode } from "../core/messages/message-code.message"

const authRepo = AppDataSource.getRepository(User);

interface AuthenticatedRequest extends Request {
  user?: User;
}
export const userAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw ErrorResult.unAuthorized("Authorization header missing", "un_authorized");
    }

    const token = authHeader.replace("Bearer ", "").trim();

    const decoded = jwt.verify(token, appConfigs.JWT_SECRET as string) as JwtPayload;
    if (!decoded) throw ErrorResult.unAuthorized("", MessageCode.UnAuthorized);

    const user = await authRepo.findOneBy({ email: decoded.email })
    if (!user) {
      throw ErrorResult.notFound("", MessageCode.userNotFound)
    }

    req.user = user;
    next();
  } catch (err) {
    throw ErrorResult.unAuthorized("", MessageCode.UnAuthorized)
  }
};