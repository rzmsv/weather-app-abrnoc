import { Request, Response, NextFunction } from 'express';
import { ErrorResult } from './error.core';
import { BaseController } from './base.message';
import { findMessage } from "./messages/message"

/**
 * Global async error handler for controller functions.
 */
export const asyncHandler =
  (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        await fn(req, res, next);
      } catch (err: any) {
        const functionName = fn.name || '';

        err.message = await findMessage(err.messageCode, "en");

        BaseController.fail(
          res,
          ErrorResult.internal(err, null, functionName)
        );
      }
    };