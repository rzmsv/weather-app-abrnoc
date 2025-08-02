import jwt from "jsonwebtoken";
import { appConfigs } from "../configs";

class JwtService {
  private secretKey: string = appConfigs.JWT_SECRET;;
  private expiresTime: any = appConfigs.JWT_EXPIRE_IN;

  constructor() { }


  sign = (data: object): string => {
    const options: jwt.SignOptions = {
      expiresIn: this.expiresTime,
    }
    return jwt.sign(data, this.secretKey, options);
  }

  verify = async (token: string) => {
    try {
      return await jwt.verify(token, this.secretKey);
    } catch (err) {
      throw ("Invalid or expired token.");
    }
  }

}

export default new JwtService