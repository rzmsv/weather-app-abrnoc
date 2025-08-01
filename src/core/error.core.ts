export class ErrorResult extends Error {
  statusCode: number;
  messageCode: string | null;

  constructor(
    name: string = 'API Error',
    statusCode: number = 500,
    message: string = '',
    code: string | null = null
  ) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.messageCode = code;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }

  static result(
    name: string,
    statusCode: number,
    err: unknown,
    code: string | null = null
  ): ErrorResult {
    if (err instanceof ErrorResult) {
      return err;
    } else {
      const message = typeof err === 'string' ? err : 'Unknown error';
      return new ErrorResult(name, statusCode, message, code);
    }
  }

  static badRequest(message = '', code: string | null = null, force = true): ErrorResult {
    return ErrorResult.result('BAD_REQUEST', 400, message, code);
  }

  static unAuthorized(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('UNAUTHORIZED', 401, message, code);
  }

  static forbidden(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('FORBIDDEN', 403, message, code);
  }

  static notFound(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('NOT_FOUND', 404, message, code);
  }

  static internal(err: unknown, code: string | null = null, section: string = ''): ErrorResult {
    if (!(err instanceof ErrorResult)) {
      if (!(err instanceof Error)) {
        err = new Error(String(err));
      }

      err = 'Internal server error';
      code = null;
    }

    return ErrorResult.result('INTERNAL_SERVER_ERROR', 500, err, code);
  }

  static badGateway(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('BAD_GATEWAY', 502, message, code);
  }

  static unAvailabe(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('SERVICE_UNAVAILABLE', 503, message, code);
  }

  static gatewayTimeout(message = '', code: string | null = null): ErrorResult {
    return ErrorResult.result('GATEWAY_TIMEOUT', 504, message, code);
  }
}
