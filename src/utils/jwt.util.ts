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

  verify = <T>(token: string): T => {
    try {
      return jwt.verify(token, this.secretKey) as T;
    } catch (err) {
      throw ("Invalid or expired token.");
    }
  }

}

export default new JwtService