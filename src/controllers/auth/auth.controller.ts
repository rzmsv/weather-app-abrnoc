import { Request, Response, NextFunction } from "express";
import AuthService from "../../services/auth/auth.service";
import { BaseController } from "../../core/base.message"


class AuthController {
  constructor(private authService: AuthService) { }

  signup_controller = async (req: Request, res: Response, next: NextFunction) => {
    // const result = await this.weatherService.weatherList_service()
    // return BaseController.ok(res, result)
  }

  login_controller = async (req: Request, res: Response, next: NextFunction) => {
    // const { id } = req.params
    // const result = await this.weatherService.weatherById_service(id)
    // return BaseController.ok(res, result)
  }
}

export default AuthController