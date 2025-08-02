import { SignupUserRequest, SignupUserResponse, LoginUserRequest } from "../../types/user.type"
import { AppDataSource } from '../../db/data-source.db';
import { User } from "../../entities/user.entity";
import { ErrorResult } from "../../core/error.core"
import { MessageCode } from "../../core/messages/message-code.message"


const authRepo = AppDataSource.getRepository(User);

class AuthRepository {

  constructor() { }

  signup_repository = async (data: SignupUserRequest): Promise<SignupUserResponse> => {
    try {
      const newUser = authRepo.create(data);
      return await authRepo.save(newUser);
    } catch (error) {
      throw error
    }
  }

  login_repository = async (body: LoginUserRequest) => {
    try {
      const user = await authRepo.findOneBy({ email: body.email })
      if (!user) {
        throw ErrorResult.notFound("", MessageCode.userNotFound)
      }
      return user
    } catch (error) {
      throw error;
    }
  }
}

export default AuthRepository