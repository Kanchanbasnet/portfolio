import { NextFunction, Request, Response } from 'express';

export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'error';
  }
}

export const customErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || 500;

  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
    },
  });
};
