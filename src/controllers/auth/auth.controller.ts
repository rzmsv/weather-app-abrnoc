import { Request, Response, NextFunction } from "express";
import AuthService from "../../services/auth/auth.service";
import { plainToInstance } from "class-transformer";
import { SignupUserRequest, LoginUserRequest } from "../../types/user.type";
import { BaseController } from "../../core/base.message"


class AuthController {
  constructor(private authService: AuthService) { }

  signup_controller = async (req: Request, res: Response, next: NextFunction) => {
    const body = plainToInstance(SignupUserRequest, req.body)
    const result = await this.authService.signup_service(body)
    return BaseController.ok(res, result)
  }

  login_controller = async (req: Request, res: Response, next: NextFunction) => {
    const body = plainToInstance(LoginUserRequest, req.body)
    const result = await this.authService.login_service(body)
    return BaseController.ok(res, result)
  }
}

export default AuthController