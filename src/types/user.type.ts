import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class SignupUserRequest {
  @IsString()
  email!: string;

  @IsString()
  name!: string

  @IsString()
  lastname!: string

  @IsString()
  password!: string
}

export interface SignupUserResponse {
  email: string,
  name: string,
  lastName: string,
}

export class LoginUserRequest {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  password!: string
}