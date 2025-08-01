import { Response } from 'express';
import { ErrorResult } from './error.core';

export class BaseController {
  static ok(res: Response, result: unknown = {}, statusCode = 200) {
    return res.status(statusCode).json({
      result,
      status: 200
    });
  }

  static fail(
    res: Response,
    err: unknown,
    statusCode: number = 400,
    name?: string
  ) {
    let errorMessage: string;

    if (err instanceof ErrorResult) {
      statusCode = err.statusCode;
      name = err.name;
      errorMessage = err.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else {
      errorMessage = String(err);
    }

    return res
      .status(statusCode)
      .json(errorResponse(errorMessage, name, statusCode));
  }
}

const errorResponse = (
  message: string | string[] = "",
  name: string = "BAD_REQUEST",
  status: number = 400
): {
  status: number;
  name: string;
  message: string[];
} => {
  const formattedMessage = Array.isArray(message) ? message : [message];

  return {
    status,
    name,
    message: formattedMessage
  };
};