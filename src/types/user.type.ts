export interface SignupUserRequest {
  email: string,
  name: string,
  lastname: string,
  password: string
}

export interface SignupUserResponse {
  email: string,
  name: string,
  lastName: string,
}

export interface LoginUserRequest {
  email: string,
  password: string
}