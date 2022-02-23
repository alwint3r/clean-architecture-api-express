import { Router } from "express";

export interface IRouteFactory {
  (app: Express.Application): Router;
}