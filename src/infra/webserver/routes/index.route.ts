import { Router } from "express";
import deviceRouteFactory from "./devices/device.route";

export default function indexRouteFactory(app: Express.Application): Router {
  const router = Router();

  router.use("/devices", deviceRouteFactory(app));

  return router;
}