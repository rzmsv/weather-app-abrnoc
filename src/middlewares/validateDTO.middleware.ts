import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { ErrorResult } from "../core/error.core";
import { MessageCode } from "../core/messages/message-code.message"

export function validateDto(dtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(dtoClass, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw ErrorResult.badRequest("", MessageCode.wrongInsertData)
    }

    next();
  };
}