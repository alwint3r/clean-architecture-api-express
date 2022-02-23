import { Handler } from "express";

export function asyncHandler(fn: Handler): Handler {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (ex) {
      next(ex);
    }
  };
}
