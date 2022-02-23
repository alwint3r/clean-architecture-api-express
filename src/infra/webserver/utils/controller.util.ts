import { Request } from "express";
import { IRequestObject } from "../../../adapters/controllers/request-object.interface";

export function createRequestObject(req: Request): IRequestObject {
  return {
    body: req.body,
    params: req.params as Record<string, string>,
    query: req.query as Record<string, string>,
    headers: req.headers as Record<string, string>,
    path: req.path,
  };
}
