import { Router } from "express";
import { CreateDeviceController } from "../../../../adapters/controllers/create-device.controller";
import { CreateDeviceUseCase } from "../../../../use-cases/create-device.use-case";
import { DeviceinMemoryRepositoryBackend } from "../../../database/repository-backend/device-repository-inmem.backend";
import { createRequestObject } from "../../utils/controller.util";
import { asyncHandler } from "../../utils/handler.util";

export default function deviceRouteFactory(app: Express.Application): Router {
  const router = Router();
  const deviceRepository = new DeviceinMemoryRepositoryBackend();
  const createDeviceUseCase = new CreateDeviceUseCase(deviceRepository);
  const createDeviceController = new CreateDeviceController(createDeviceUseCase);

  async function createDeviceHandler(req, res) {
    const requestObject = createRequestObject(req);
    const responseObject = await createDeviceController.handle(requestObject);

    res.status(responseObject.statusCode).json(responseObject.body);
  }

  router.post("/", asyncHandler(createDeviceHandler));

  return router;
}