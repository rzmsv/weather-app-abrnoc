import { SignupUserRequest, LoginUserRequest } from "../../types/user.type"
import bcrypt from "../../utils/bcrypt.util"
import JWT from "../../utils/jwt.util"
import AuthRepository from "../../repositories/auth/auth.repository"
import { ErrorResult } from "../../core/error.core"
import { MessageCode } from "../../core/messages/message-code.message"

class AuthService {
  constructor(private authRepository: AuthRepository) { }

  signup_service = async (body: SignupUserRequest) => {
    try {
      const hashPass = await bcrypt.hashPassword(body.password)
      body.password = hashPass
      const response = await this.authRepository.signup_repository(body)
      return response
    } catch (error) {
      throw ErrorResult.internal(error, null)
    }
  }

  login_service = async (body: LoginUserRequest) => {
    try {
      const response = await this.authRepository.login_repository(body)
      const compare = await bcrypt.comparePassword(body.password, response.password)
      if (!compare) {
        throw ErrorResult.badGateway("", MessageCode.passwordWrong)
      }
      const token = JWT.sign({ id: response.id, email: response.email })
      return token
    } catch (error) {
      throw error
    }
  }

}

export default AuthService